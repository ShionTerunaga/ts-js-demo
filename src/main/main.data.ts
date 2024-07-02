import { aboutUndefined } from "../sample/about-undefined"
import { filterObjectMain } from "../sample/filter-object"
import { higherOrderFunctionBasic } from "../sample/higher-order-function"
import { jsIn } from "../sample/js-in"
import { proxy } from "../sample/proxy"
import { proxyCall } from "../sample/proxy-cache"
import { recordSample } from "../sample/record"
import type { sectionValueType, topicType } from "./main.type"

export const sectionValue: sectionValueType[] = [
    { name: "proxy基礎編", value: "proxy" },
    { name: "高階関数", value: "proxyCache" },
    { name: "proxyキャッシュ編", value: "higherFunc" },
    { name: "record(YamadaUIならDict)", value: "record" },
    { name: "JSの`in`について", value: "in" },
    { name: "filterObjectについて", value: "filterObject" },
    { name: "undefinedの判定", value: "undefined" },
]

export const topic: topicType[] = [
    {
        key: "proxy",
        processing: () => proxy(),
    },
    {
        key: "higherFunc",
        processing: () => higherOrderFunctionBasic(),
    },
    {
        key: "proxyCache",
        processing: () => proxyCall(),
    },
    {
        key: "record",
        processing: () => recordSample(),
    },
    {
        key: "in",
        processing: () => jsIn(),
    },
    {
        key: "filterObject",
        processing: () => filterObjectMain(),
    },
    {
        key: "undefined",
        processing: () => aboutUndefined(),
    },
]
