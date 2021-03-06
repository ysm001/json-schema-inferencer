class Set(list):
    pass


class BT(str):
    pass


class RT(list):
    pass


class AT(list):
    pass


class UT(tuple):
    pass


class KV(tuple):
    pass


class OptKV(KV):
    pass


EmptySet = Set()


def min_kv(kv1, kv2):
    if isinstance(kv1, OptKV) or isinstance(kv2, OptKV):
        return OptKV

    return KV


def infer_type(field):
    if isinstance(field, float):
        return BT("number")

    if isinstance(field, str):
        return BT("string")

    if isinstance(field, bool):
        return BT("boolean")

    if isinstance(field, int):
        return BT("integer")

    if isinstance(field, list):
        return AT([infer_type(f) for f in field])

    if isinstance(field, dict):
        return RT([KV([k, infer_type(v)]) for (k, v) in field.items()])

    if field is None:
        return BT("null")

    raise Exception("Unknonw type: {}".format(field))


def kind(u):
    if isinstance(u, BT):
        return u

    if isinstance(u, RT):
        return "record"

    if isinstance(u, AT):
        return "array"

    raise Exception("Unknown type: {}".format(type(u)))


def o(t):
    if isinstance(t, UT):
        return o(t[0]) + o(t[1])

    if t == EmptySet:
        return EmptySet

    return Set([t])


def kmatch(t1, t2):
    return [(u1, u2) for u2 in o(t2) for u1 in o(t1) if kind(u1) == kind(u2)]


def kunmatch(t1, t2):
    d1 = [u1 for u1 in o(t1) if all([kind(u1) != kind(u2) for u2 in o(t2)])]
    d2 = [u2 for u2 in o(t2) if all([kind(u1) != kind(u2) for u1 in o(t1)])]
    return Set(d1 + d2)


def d(rt):
    return rt


def fmatch(rt1, rt2):
    return [(kv1, kv2) for kv2 in d(rt2) for kv1 in d(rt1) if kv1[0] == kv2[0]]


def funmatch(rt1, rt2):
    d1 = [kv1 for kv1 in d(rt1) if all([kv1[0] != kv2[0] for kv2 in d(rt2)])]
    d2 = [kv2 for kv2 in d(rt2) if all([kv1[0] != kv2[0] for kv1 in d(rt1)])]
    return Set(d1 + d2)


def simplify(arrt):
    return AT(set(arrt))


def oi(s):
    if len(s) == 0:
        return EmptySet

    if len(s) == 1:
        return s[0]

    return UT([s[0], oi(s[1:])])


def di(s):
    if len(s) == 0:
        return RT({})

    return RT(s)


def fuse(t1, t2):
    km = kmatch(t1, t2)
    ku = kunmatch(t1, t2)
    return oi(Set([lfuse(u1, u2) for (u1, u2) in km]) + ku)


def lfuse(t1, t2):
    if not kind(t1) in ["record", "array"] and t1 == t2:
        return t1

    if isinstance(t1, RT) and isinstance(t2, RT):
        fm = fmatch(t1, t2)
        fu = funmatch(t1, t2)
        return di(
            [min_kv(p1, p2)([p1[0], fuse(p1[1], p2[1])]) for (p1, p2) in fm]
            + [OptKV([k, v]) for (k, v) in fu]
        )

    if isinstance(t1, AT) and isinstance(t2, AT):
        return AT([fuse(collapse(t1), collapse(t2))])

    raise Exception("Unknown type. {} {}".format(t1, t2))


def collapse(arrt):
    if arrt == EmptySet:
        return EmptySet

    return fuse(arrt[0], collapse(AT(arrt[1:])))


def infer_schema(jsons):
    inferred_types = infer_type(jsons)
    return collapse(inferred_types)
