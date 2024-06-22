const func1 = (a: number) => (b: number) => {
    console.log(a)

    return b
}

export const higherOrderFunctionBasic = () => {
    func1(1)
}
