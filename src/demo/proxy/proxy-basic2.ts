type numProps = "one" | "two" | "three"

const newProxy = (str: numProps) => {
    switch (str) {
        case "one":
            return 10 * 1
        case "two":
            return 10 * 2
        case "three":
            return 10 * 3
    }
}

const proxy2 = () => {
    return new Proxy(newProxy, {
        apply: (target, arg, [str]: [numProps]) => {
            console.log("applyの中身")
            console.log("第一引数の関数の中身")
            console.log("第二引数は不明")

            return newProxy(str)
        },
    })
}

export const proxyBasic2 = () => {
    console.log("基本的なproxy2")

    const pr2 = proxy2()

    console.log(pr2("three"))
}
