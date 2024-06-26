import type { funcType, resType1, resType2 } from "./proxy-cache.type"

const func = (str: keyof funcType): string => {
    return `${str}-${str}`
}

const proxyFunc = () => {
    const cache = new Map<keyof funcType, string>()

    return new Proxy(func, {
        apply: (_target, _targetArg, [str]: [keyof funcType]) => {
            return { [str]: func(str) }
        },

        get: (_target, str: keyof funcType) => {
            if (!cache.has(str)) {
                const ans = func(str)

                cache.set(str, ans)
            }

            console.log(cache)

            return cache.get(str)
        },
    }) as resType1 & resType2
}

export const res = proxyFunc()
