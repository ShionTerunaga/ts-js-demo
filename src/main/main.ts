import { select } from "@inquirer/prompts"
import { sectionValue } from "./mainSection.data"
import { topic } from "./mainTopic.data"

const selectSection = async () => {
    const section = await select({
        message: "実行するセクションを選んでください。",
        choices: sectionValue,
    })

    return section
}

export const main = async () => {
    try {
        const section = await selectSection()

        const process = topic.find((item) => item.key === section)

        console.log("\n")

        if (!process) {
            console.log("指定のものは見つかりませんでした。")

            return
        }

        process.processing()
    } catch (e) {}
}
