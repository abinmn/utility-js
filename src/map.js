const head = require("./head")

const map = (arr, fn) => {
    const headElement = head(arr);

    if (headElement == null) {
        return [];
    }

    const mappedElement = fn(headElement)
    const slicedArr = arr.slice(1);

    return [mappedElement].concat(map(slicedArr, fn));

}

module.exports = map;