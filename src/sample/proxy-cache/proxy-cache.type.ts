export type funcType = {
    a: string
    b: string
    c: string
}

export type resType1 = {
    [T in keyof funcType]: (str: keyof funcType) => string
}

export type resType2 = (str: keyof funcType) => string
