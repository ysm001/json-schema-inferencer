import pytest
from jsi.infer_schema import infer_schema


@pytest.mark.parametrize(
    "input, expected",
    [
        ([{"field": 10}], [("field", "integer")]),
        ([{"field": 1.23}], [("field", "number")]),
        ([{"field": "something"}], [("field", "string")]),
        ([{"field": True}], [("field", "boolean")]),
        ([{"field": [1]}], [("field", ["integer"])]),
        ([{"field": {"sub_field": 1}}], [("field", [("sub_field", "integer")])]),
        (
            [{"A": "hoge", "B": 10}, {"B": True, "C": "fuga"}, {"A": None, "B": 10}],
            [("B", ("integer", "boolean")), ("A", ("string", "null")), ("C", "string")],
        ),
        (
            [
                {
                    "k_string": "string",
                    "k_array": [
                        {"k_string": "string", "k_number": 10},
                        {"k_string": "string"},
                    ],
                },
                {
                    "k_string": "string",
                    "k_array": [
                        {"k_string": "string", "k_number": 10},
                        {"k_string": "string"},
                    ],
                },
            ],
            [
                ("k_string", "string"),
                ("k_array", [[("k_string", "string"), ("k_number", "integer")]]),
            ],
        ),
    ],
)
def test_infer_schema(input, expected):
    schema = infer_schema(input)
    assert schema == expected
