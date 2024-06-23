import { higherOrderFunctionBasic } from "../demo/higher-order-function"
import { proxy } from "../demo/proxy"
import { proxyCall } from "../demo/proxy-cache"
import type { sectionValueType, topicType } from "./main.type"

export const sectionValue: sectionValueType[] = [
    { name: "proxy基礎編", value: "proxy" },
    { name: "高階関数", value: "proxyCache" },
    { name: "proxyキャッシュ編", value: "higherFunc" },
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
]
