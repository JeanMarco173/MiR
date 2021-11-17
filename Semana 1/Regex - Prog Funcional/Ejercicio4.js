//65 -> 90 (Upper)
//97-122 (Lowwer)

function toUpperCase(text) {
    let textAux = []
    for (const key in text) {
        let character = text.charCodeAt(key);
        character >= 91 && character <= 122 
            ? textAux.push(String.fromCharCode(character - 32))
            : textAux.push(String.fromCharCode(character))
    }
    return textAux.join("")
}

console.log(toUpperCase("hola"))
console.log(toUpperCase("anita lava la tina"))
console.log(toUpperCase("Hola"))