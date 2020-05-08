from infer_schema import *


def to_readable_json(t):
    if isinstance(t, UT):
        return {"anyOf": [to_readable_json(u) for u in o(t)]}

    if isinstance(t, BT):
        return t

    if isinstance(t, AT):
        return [to_readable_json(u) for u in t]

    if isinstance(t, RT):
        return dict([to_readable_json(kv) for kv in t])

    if isinstance(t, OptKV):
        (k, v) = t
        return ("{}?".format(k), to_readable_json(v))

    if isinstance(t, KV):
        (k, v) = t
        return (k, to_readable_json(v))

    if t == EmptySet:
        return []

    raise Exception("Unknown type: {}".format(type(t)))


def to_json(t):
    if isinstance(t, UT):
        return {"anyOf": [to_json(u) for u in o(t)]}

    if isinstance(t, BT):
        return {"type": t}

    if isinstance(t, AT):
        if len(t) != 1:
            raise Exception("AT contans more than one item")
        return {"type": "array", "items": to_json(t[0])}

    if isinstance(t, RT):
        return {
            "type": "object",
            "properties": dict([(k, to_json(v)) for (k, v) in t]),
            "required": [kv[0] for kv in t if not isinstance(kv, OptKV)],
        }

    if t == EmptySet:
        return {"type": "array", "items": None}

    raise Exception("Unknown type: {}".format(type(t)))


def to_json_schema(name, t):
    definitions = {}
    definitions[name] = to_json(t)
    return {
        "$schema": "http://json-schema.org/draft-04/schema",
        "definitions": definitions,
    }
