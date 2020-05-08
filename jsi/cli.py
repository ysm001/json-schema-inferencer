import json
import sys
import os
from infer_schema import infer_schema
from schema_to_json import to_json, to_json_schema
import argparse


def parse_args():
    parser = argparse.ArgumentParser(
        description="This is a tool for inferring schema from array of json responses"
    )

    parser.add_argument(
        "-i",
        "--input",
        help="Path to json file containing array of responses",
        required=True,
    )

    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    file_name = args.input

    f = open(file_name, "r")
    jsons = json.load(f)
    schema = infer_schema(jsons)
    jsonschema = to_json(schema)
    print(json.dumps(jsonschema, indent=2))
