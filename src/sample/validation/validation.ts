export const validation = (text: string) => {
    const [a, name, contents] = text.match(/^:::(\w+)\s+([\s\S]*?)$/) ?? []

    console.table({ a, name, contents })
}
