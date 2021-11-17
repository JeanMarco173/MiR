# Ejercicio 1

```js
    const recipe = {
    name: "",
    ingredients: [
        { name: "Pan", quantity: 2 },
        { name: "Jamón", quantity: 1 },
        { name: "Queso", quantity: 1 },
    ]
    }
```

Imprimir la cantidad del primer ingrediente.
Imprimir los ingredientes con el siguiente formato:

```js
2 de Pan
1 de Jamón
1 de Queso
```

# Ejercicio 2

Escribir una función capitalizar que reciba un string y retorne otro string que capitalice cada palabra de la frase.

```js
capitalizar("hola mundo") // "Hola Mundo"
```

# Ejercicio 3

https://leetcode.com/problems/length-of-last-word/

# Ejercicio 4

Escribir una función toUpperCase que reciba un string y retorne el mismo texto en mayúsculas sin utilizar el toUpperCase de los strings.

Nota: La entrada sólo va a tener a-z y A-Z.

```js
toUpperCase("hola") // "HOLA"
toUpperCase("anita lava la tina") // "ANITA LAVA LA TINA"
toUpperCase("Hola") // "HOLA"
```

# Ejercicio 5 - Colores hexadecimales

Escribe una expresión regular que verifique si una cadena es un color hexadecimal válido como #f00 o #bada55. Recuerda que un color hexadecimal puede tener 3 o 6 caracteres, y cada caracter puede ir de 0 a 9 y de A a F.

# Ejercicio 6 - Fechas

Escribe una expresión regular que verifique si una cadena es una fecha válida, por ejemplo, 12/12/2012 o 24/08/1982, etc.

Intenta primero crear una expresión que valide el formato únicamente, es decir, que comience con dos dígitos, seguido de un /, dos dígitos, otro / y cuatro dígitos, sin importar si son fechas inválidas como 45/98/9234.

Empieza a agregarle más restricciones, por ejemplo, el primer dígito puede ser un 0, 1, 2 o 3 únicamente. Eso podría generar días inválidos como 36 pero es un avance.

Sigue agregando restricciones para ver hasta qué punto llegas. Sin embargo, ten en cuenta que no vas a encontrar una expresión regular perfecta porque hay meses con diferentes días.

# Ejercicio 7 - Email

Escribe una expresión regular que verifique si una dirección de email es válida.

Puedes empezar por una expresión que verifique que comience con al menos un caracter, que tenga una @ y que tenga más caracteres, seguido de un punto, seguido de más caracteres.

Así como en el ejercicio anterior no vas a encontrar una expresión regular perfecta pero te puede ayudar a filtrar emails que claramente sean inválidos.