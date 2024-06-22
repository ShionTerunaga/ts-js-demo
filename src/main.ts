import { higherOrderFunctionBasic } from "./demo/higher-order-function"
import { proxy } from "./demo/proxy"
import fs from "fs"
import { proxyCall } from "./demo/proxy-cache"

type topicType = {
    key: string
    processing: () => void
}
const topic: topicType[] = [
    {
        key: "proxy",
        processing: () => proxy(),
    },
    {
        key: "heigerFunc",
        processing: () => higherOrderFunctionBasic(),
    },
    {
        key: "proxyCache",
        processing: () => proxyCall(),
    },
]

export const main = () => {
    console.log("検索ワード")

    topic.forEach((item) => {
        console.log(item.key)
    })

    const input = fs.readFileSync("/dev/stdin", "utf8")

    const word = input.split("\n")

    const process = topic.find((item) => item.key === word[0])

    console.log("\n")

    if (!process) {
        console.log("指定のものは見つかりませんでした。")

        return
    }

    process.processing()
}
