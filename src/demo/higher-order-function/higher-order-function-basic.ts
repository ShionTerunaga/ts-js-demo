const func1 = (a: number) => (b: number) => {
    console.log(a)
}

export const higherOrderFunctionBasic = () => {
    const a = func1(1)

    console.log(a)
}
