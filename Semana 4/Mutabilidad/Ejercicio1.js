// Crear un nuevo arreglo que retorne nuevos objetos con las mismas propiedades más una nueva propiedad `total`, que suma `q1`, `q2`, `q3`

const results = [
    { q1: 1, q2: 2, q3: 3 },
    { q1: 5, q2: 3, q3: 8 },
    { q1: 3, q2: 2, q3: 5 }
]

const newArray = results.map( item => ({...item, total: item.q1 + item.q2 + item.q3}))

console.log(newArray)