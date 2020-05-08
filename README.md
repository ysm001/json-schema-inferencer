<!-- @format -->

# Json Schema Inferencer

This is a tool for inferencing the type from massive JSON datasets.

This is based on [Schema Inference for Massive JSON Datasets](https://openproceedings.org/2017/conf/edbt/paper-62.pdf)

# Usage

```
python ./jsi/cli.py -i <path-to-array-of-jsons>
```

`protobuf` is experimental.

# Example

Input

```json
[
  {
    "A": "hoge",
    "B": 10
  },
  {
    "B": true,
    "C": "fuga"
  },
  {
    "A": null,
    "B": 10
  }
]
```

Output

```json
{
  "$schema": "http://json-schema.org/draft-04/schema",
  "definitions": {
    "example": {
      "type": "object",
      "properties": {
        "B": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "boolean"
            }
          ]
        },
        "A": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "C": {
          "type": "string"
        }
      },
      "required": ["B"]
    }
  }
}
```
