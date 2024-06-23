import { res } from "./proxy-cache"

export const proxyCall = () => {
    console.log(res("a"))

    console.log(res.c)

    console.log(res.a)
}
