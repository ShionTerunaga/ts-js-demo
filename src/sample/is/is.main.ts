import { is } from "./is"

export const isMain = () => {
    const ex1 = NaN
    const ex2 = NaN

    const ex3 = 0
    const ex4 = -0

    console.log("NaN===NaN は", ex1 === ex1)
    console.log("作成したisの関数で判定")
    console.log("NaN is NaN は", is(ex1, ex2), "\n")

    console.log("0===-0", ex3 === ex4)
    console.log(
        "0と-0は数学上は同じだがプログラムでは別物として扱う。\n作成したisの関数で判定",
    )
    console.log("0 is -0 =", is(ex3, ex4))
}
