const regexColors = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i


console.log(regexColors.test('#f00'))
console.log(regexColors.test('#bada55'))