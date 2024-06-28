import { higherOrderFunctionBasic } from "../sample/higher-order-function"
import { proxy } from "../sample/proxy"
import { proxyCall } from "../sample/proxy-cache"
import { recordSample } from "../sample/record"
import type { sectionValueType, topicType } from "./main.type"

export const sectionValue: sectionValueType[] = [
    { name: "proxy基礎編", value: "proxy" },
    { name: "高階関数", value: "proxyCache" },
    { name: "proxyキャッシュ編", value: "higherFunc" },
    { name: "record(YamadaUIならDict)", value: "record" },
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
]
