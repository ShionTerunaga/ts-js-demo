export const is = (x: any, y: any) => {
    return (x === y && 1 / x === 1 / y) || (x !== x && y !== y)
}
