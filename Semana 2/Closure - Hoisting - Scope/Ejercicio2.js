/*
Ejercicio 2
Escribir una función crearContador que retorne una nueva función que incremente un número
y lo retorne cada vez que es invocada:
*/

```js
function createCount () {
    let count = 0;
    return function increment(){
        count++;
        return count;
    }
}

const counter1 = createCount();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3
console.log(counter1()); // 4

const counter2 = createCount();
console.log(counter2()); // 1
```