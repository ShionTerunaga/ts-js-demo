type targetType = {
    message1: string
    message2: string
}

const target: targetType = {
    message1: "hello",
    message2: "everyone",
}

const proxy1 = () => {
    return new Proxy(target, {
        get: (target, prop) => {
            console.log("getの中身")

            console.log("第一引数targetはProxyの第一引数であるオブジェクト")
            console.log("第二引数にはメソッド名が渡される\n")

            return "world"
        },
    })
}

/**
 * Proxyの基本的な使い方1
 *
 * pr1.message1でProxyの第二引数のメソッドgetが発火する
 */
export const proxyBasic1 = () => {
    console.log("基本的なProxy1")

    const pr1 = proxy1()

    console.log(pr1.message1)
}
