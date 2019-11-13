import json
import sys
import os
from infer_schema import infer_schema, to_json, to_json_schema
from to_protobuf import to_protobuf
import argparse 


def parse_args():
    parser = argparse.ArgumentParser(description='This is a tool for inferring schema from array of json responses')

    parser.add_argument('-i', '--input', help='Path to json file containing array of responses', required=True)
    parser.add_argument('-f', '--format', help='Output format. jsonschema|protobuf')

    return parser.parse_args()


if __name__ == '__main__':
    args = parse_args()
    file_name = args.input
    out_format = args.format or 'jsonschema'

    f = open(file_name, 'r')
    jsons = json.load(f)
    schema = infer_schema(jsons)
    jsonschema = to_json(schema)

    if out_format == 'protobuf':
        protobuf_name, _ = os.path.splitext(os.path.basename(file_name))
        protobuf = to_protobuf(protobuf_name, jsonschema)
        print(protobuf)
    else:
        print(json.dumps(jsonschema, indent=2))
