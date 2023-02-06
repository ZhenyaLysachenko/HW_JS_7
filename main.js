//  1  Цей метод перебирає кожен елемент масиву та виконує функцію,
//     яку передано йому, для кожного елемента.
// 
//  2 через функцию конструктор
//   arr = Array()
//   через зміну довжіні масиву
//   arr.length = 0
// 
//   3 arr.isArray() - якщо так то поверне true, якщр ні то false




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

