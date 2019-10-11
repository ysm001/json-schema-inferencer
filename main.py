import json
import sys
from infer_schema import infer_schema, to_json, to_json_schema

if __name__ == '__main__':
    args = sys.argv
    f = open(args[1], 'r')
    jsons = json.load(f)
    schema = infer_schema(jsons)
    print(json.dumps(to_json_schema('example', schema), indent=2))
