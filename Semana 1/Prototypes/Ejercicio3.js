String.prototype.palindrome = function(){
    const textAux = this.valueOf()
        .toLocaleLowerCase()
        .replace(/ /g,'')
        .split('')
        .reverse()
        .join('');
    let isPalindrome
    this.valueOf().toLowerCase().replace(/ /g,'') === textAux
    ? isPalindrome = true
    : isPalindrome = false
    return isPalindrome
}

const anita = "Anita lava la tina";
const saludo = "Hola Como Estas";
console.log(anita.palindrome())
console.log(saludo.palindrome())