const head = require("./head")

const reduce = (arr, fn, defaultValue = undefined) => {
    const headElement = head(arr);

    if (defaultValue == undefined && typeof(headElement) == "string") {
        defaultValue = '';
    }
    
    if (defaultValue == undefined && typeof(headElement) == "number") {
        defaultValue = 0;
    }

    if (headElement == null) {
        return defaultValue;
    }

    const slicedArr = arr.slice(1);

    return reduce(slicedArr, fn, fn(defaultValue, headElement));
}
module.exports = reduce;
