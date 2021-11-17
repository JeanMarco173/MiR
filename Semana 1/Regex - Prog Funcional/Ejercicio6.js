const regexDate = /^((0?[1-9])|([1-2]\d)|(3[0-1]))[\/]((0?[1-9])|(1[0-2]))[\/](\d{4})$/


console.log(regexDate.test("05/12/2021")) // true
console.log(regexDate.test("25/12/2021")) // false
