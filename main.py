import json
import sys
import os
from infer_schema import infer_schema, to_json, to_json_schema
from to_protobuf import to_protobuf

if __name__ == '__main__':
    args = sys.argv
    file_name = args[1]
    f = open(file_name, 'r')
    jsons = json.load(f)
    schema = infer_schema(jsons)
    jsonschema = to_json(schema)

    protobuf_name, _ = os.path.splitext(os.path.basename(file_name))
    protobuf = to_protobuf(protobuf_name, jsonschema)
    print(protobuf)
