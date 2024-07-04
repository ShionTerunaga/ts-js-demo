import { aboutUndefined } from "../sample/about-undefined"
import { filterObjectMain } from "../sample/filter-object"
import { higherOrderFunctionBasic } from "../sample/higher-order-function"
import { jsIn } from "../sample/js-in"
import { proxy } from "../sample/proxy"
import { proxyCall } from "../sample/proxy-cache"
import { recordSample } from "../sample/record"
import type { topicType } from "./main.type"

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
