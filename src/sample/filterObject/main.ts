import { filterSample } from "./filter-obj.data"
import { filterObject } from "./filter-object"

export const filterObjectMain = () => {
    const sample: Dict = {
        age: 23,
        name: "TERUSI",
        favorite: "programming",
    }

    const resultA = filterObject(sample, (key) => key in filterSample)

    console.log(resultA)
}
