import { assignAfter } from "./assign-after"
import { firstData, secondData } from "./assign-after.data"

export const assignAfterMain = () => {
    console.log("データ1")
    console.log(firstData)
    console.log("データ2")
    console.log(secondData)

    console.log("\n")

    const result = assignAfter(firstData, secondData)

    console.log("実行後")
    console.log(result)
}
