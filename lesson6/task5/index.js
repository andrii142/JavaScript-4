function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const result = [];
    for (let i = 1; i < arr.length; i++) {
        result.push(i * i);
    }
    return result;
}