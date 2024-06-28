export const filterObject = <T extends Dict, K extends Dict>(
    obj: T,
    func: (key: keyof T, value: T[keyof T], obj: T) => boolean,
): K => {
    const result: Dict = {}

    Object.entries(obj).forEach(([key, value]) => {
        const judge = func(key, value, obj)

        if (judge) result[key] = value
    })

    return result as K
}
