/*
Dada una cadena que consta de algunas palabras separadas por
un número de espacios, devuelve la longitud de la última
palabra de la cadena.

Una palabra es una subcadena máxima que consta únicamente
de caracteres que no son espacios.
*/

function countCharacters(text) {
    let textAux = text.trim().split(" ")
    let lastWord = textAux[textAux.length - 1]
    return `The last word is "${lastWord}" with lenght ${lastWord.length}`
}

console.log(countCharacters("Hello World"))
console.log(countCharacters("   fly me   to   the moon  "))
console.log(countCharacters("luffy is still joyboy"))