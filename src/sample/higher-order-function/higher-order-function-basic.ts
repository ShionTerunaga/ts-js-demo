const func1 = (a: number) => (b: number) => {
    console.log(a)

    console.log(b)
}

export const higherOrderFunctionBasic = () => {
    const a = func1(1)

    console.log(a(2))
}
