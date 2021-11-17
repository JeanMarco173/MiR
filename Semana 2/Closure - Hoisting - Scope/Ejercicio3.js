/*
Ejercicio 3
Escribir una función createGame que retorne una nueva función que reciba un número y
permita adivinar un número secreto del 1 al 100. Si el número es mayor al número
secreto la función retorna la cadena “Muy alto!”, si el número es menor retorna la cadena “Muy bajo!”.
Si el número es el correcto retorna “Lo adivinaste, felicitaciones!”
*/

```js

const readline = require("readline");

function createGame(){
    let secret = Math.floor(Math.random() * (100 - 1) + 1);
    return function play(number){
        if( number >= 1 && number <= 100 ){
            if( number > secret ) return "Muy alto!"
            else if( number < secret ) return "Muy bajo!"
            else { winner = true; return "Lo adivinaste, felicitaciones!" }
        }else return "El numero está entre 1 y 100"
    }
}

const game = createGame();
var winner = false
const label = "Ingrese un numero del 1 al 100 "

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function request(){
    if( winner ) rl.close()
    else {
        rl.question(label, function(answer){
            console.log(game(answer))
            request();
        });
    }
}
request();

```