import { proxy } from "./demo/proxy"
import fs from "fs"

type topicType = {
    key: string
    processing: () => void
}
const topic: topicType[] = [
    {
        key: "proxy",
        processing: () => proxy(),
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

    if (process === undefined) {
        console.log("指定のものは見つかりませんでした。")

        return
    }

    process.processing()
}
