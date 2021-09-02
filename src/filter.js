const head = require("./head")

const filter = (arr, fn) => {
    const headElement = head(arr);

    if (headElement == null) {
        return [];
    }

    const slicedArr = arr.slice(1);

    if (fn(headElement)) {
        return [headElement].concat(filter(slicedArr, fn))
    }
    else {
        return filter(slicedArr, fn);
    }
}

module.exports = filter;