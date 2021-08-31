const tail = (arr) => {
    if (arr.length == 0) return null;
    return arr[arr.length - 1];
}

module.exports = tail;