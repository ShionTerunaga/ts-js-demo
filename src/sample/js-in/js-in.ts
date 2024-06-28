import { test } from "./js-in.data"

export const jsIn = () => {
    console.log("age" in test)

    console.log("name" in test)

    console.log("sex" in test)

    console.log("指定するkeyがそのオブジェクトに存在するかどうか")
}
