const max = (arr) => {

    if (arr.length == 0) return undefined;

    if (arr.length == 1) return arr[0];

    if (arr[0] < arr[1]) {
        arr.splice(0,1)
    }
    else {
        arr.splice(1,1)
    }

    return max(arr)
}


module.exports = max;
