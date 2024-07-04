import { isUndefined } from "./about-undefined"

export const aboutUndefined = () => {
    console.log("引数にundefinedを入れる場合")

    console.log(isUndefined(undefined))

    console.log("引数に1を入れる場合")

    console.log(isUndefined(1))

    console.log("TSだと引数定義しないとエラーが出る")
}
