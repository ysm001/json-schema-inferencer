import sys
import json
import re


def to_protobuf(name, schema):
    if schema["type"] != "object":
        return ""

    parsed_object = parse_object(name, schema)
    return 'syntax = "proto3";\n\nimport "google/protobuf/any.proto";\n\n{}'.format(
        stringify_message_def(parsed_object)
    )


TYPE_MAPPINGS = {
    "integer": "int32",
    "number": "int32",
    "string": "string",
    "boolean": "bool",
    "null": "google.protobuf.Any",
}


def to_pascal(string):
    return "".join(x.capitalize() or "_" for x in string.split("_"))


def parse_field(name, schema):
    if schema is None:
        return {"name": name, "type": "google.protobuf.Any"}

    if "anyOf" in schema:
        return parse_anyof(name, schema)

    t = schema["type"]
    if t in TYPE_MAPPINGS:
        return {"name": name, "type": TYPE_MAPPINGS[t]}

    if t == "object":
        return parse_object(name, schema)

    if t == "array":
        return parse_array(name, schema)

    raise Exception("Unsupported type: {}".format(t))


def parse_anyof(name, schema):
    types = [s["type"] for s in schema["anyOf"]]
    if len(schema["anyOf"]) != 2 or "null" not in types:
        raise Exception(
            "anyOf is only allowed to be used for representing nullable. [{}]".format(
                ", ".join(types)
            )
        )

    field = [s for s in schema["anyOf"] if s["type"] != "null"][0]
    return {**parse_field(name, field), **{"is_nullable": True}}


def parse_object(name, schema):
    properties = schema["properties"].items()
    fields = [
        {**{"tag": i + 1, "is_required": k in schema["required"]}, **parse_field(k, v)}
        for i, (k, v) in enumerate(properties)
    ]
    return {"name": name, "type": "message", "fields": fields}


def parse_array(name, schema):
    items = parse_field(name, schema["items"])
    return {"type": "array", "items": items, "is_repeated": True}


def drop_none(l):
    return [e for e in l if e is not None]


def stringify_field(proto):
    field_strs = [
        proto["type"],
        proto["name"],
        " = {};".format(proto["tag"]) if "tag" in proto else None,
    ]
    body = " ".join(drop_none(field_strs))
    comments = drop_none(
        [
            "Optional" if not proto.get("is_required") else None,
            "Nullable" if proto.get("is_nullable") else None,
        ]
    )

    comments_str = " // {}".format("/".join(comments)) if len(comments) > 0 else ""

    return "{}{}".format(body, comments_str)


def stringify(proto):
    if proto["type"] == "message":
        return stringify_message(proto)

    if proto["type"] == "array":
        return stringify_array(proto)

    if proto["type"] == "oneof":
        return stringify_oneof(proto)

    return stringify_field(proto)


def extract_message_defs(protos):
    message_strs = [stringify_message_def(v) for v in protos if v["type"] == "message"]
    return "\n{}\n\n".format("\n\n".join(message_strs)) if len(message_strs) > 0 else ""


def stringify_message_def(proto):
    field_strs = [stringify(f) for f in proto["fields"]]
    message_name = to_pascal(proto["name"])
    return "message {} {{\n{}{}\n}}".format(
        message_name, extract_message_defs(proto["fields"]), "\n".join(field_strs)
    )


def stringify_message(proto):
    message_name = to_pascal(proto["name"])
    return stringify_field({**proto, **{"type": message_name}})


def stringify_array(proto):
    items = proto["items"]
    return "{}repeated {}".format(
        extract_message_defs([items]), stringify({**items, **{"tag": proto["tag"]}}),
    )


def stringify_oneof(proto):
    field_strs = [stringify(f) for f in proto["items"]]
    return "oneof {} {{\n{}{}\n}}".format(
        proto["name"], extract_message_defs(proto["items"]), "\n".join(field_strs)
    )
