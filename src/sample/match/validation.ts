export const validation = (text: string) => {
    const [a, name, contents] =
        text.match(/^:::(\w+)\s+([\s\S]*?)\s*:::$/) ?? []

    console.table({ a, name, contents })
}
