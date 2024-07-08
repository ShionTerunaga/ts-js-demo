export const assignAfter = (...source: Dict[]) => {
    const result: Dict = {}

    for (const nextSource of source) {
        for (const nextKey in nextSource) {
            if (!Object.prototype.hasOwnProperty.call(nextSource, nextKey))
                continue

            if (nextKey in result) delete result[nextKey]

            result[nextKey] = nextSource[nextKey]
        }
    }

    return result
}
