const cars = require('./cars')

//Create a function ferraris that returns all the cars of the Ferrari brand.
const ferrari = () => cars.filter( car => car.brand == 'Ferrari' )

//Create a function nineties that returns all the cars with models between 1980 and 1990.
const nineties = () => cars.filter( car => car.model >= '1980' && car.model <= '1990')

/*Create a function list that returns an array of strings with the same number of cars.
Each element should contain the string “This from costs $” (e.g. for the first element it should say
“This Mazda from 1989 costs $5241”).*/
const listCars = () => cars.map( car => `This ${car.brand} from ${car.model} costs $${car.price}` )

//Create a function bmwSum that returns the sum of all prices of the BMW cars.
const bmwSum = () => cars.filter( car => car.brand === 'BMW' )
    .map( car => car.price )
    .reduce( ( acumulador, nextValue ) => acumulador + nextValue, 0 )