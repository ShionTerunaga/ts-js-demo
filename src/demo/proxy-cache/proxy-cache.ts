export type funcType = {
    a: string
    b: string
    c: string
}

const func = (str: keyof funcType) => {
    return `${str}-${str}`
}

const proxyFunc = () => {
    const cache = new Map<keyof funcType, string>()

    return new Proxy(func, {
        apply: (_target, _targetArg, [str]: [keyof funcType]) => {
            return func(str)
        },

        get: (_target, str: keyof funcType) => {
            if (!cache.has(str)) cache.set(str, func(str))

            console.log(cache)

            return cache.get(str)
        },
    })
}

export const res = proxyFunc()
