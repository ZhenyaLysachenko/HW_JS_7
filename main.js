function filterBy(arrayAnyData, dataType) {
    const newArray = [];

    for (let anyElement of arrayAnyData) {
        if(typeof anyElement !== dataType)
        {
            if(anyElement !== null || dataType !== "null")
                newArray.push(anyElement);
        }
    }
    return newArray;
}

console.log(filterBy(["hello", "world", 24, "23", null], "string"));

console.log(filterBy([[], {}, 0, 23, "24", null, true, undefined], "number"));

console.log(filterBy(["hello", [1], {i:1}, 0, null, 25, "23", ""], "null"));

console.log(filterBy([undefined, "world", 24, "23", null, false], "undefined"));

console.log(filterBy([undefined, "world", 22, true, null], "number"));

console.log(filterBy(["hello", 1, 0, false, 23, true, null], "boolean"));

