# Object.create

* Sirve para crear un nuevo objeto basado en otro objeto existente (prototipo)

``` js

const Car = {
    speed: 0,
    speedUp (number) {
        this.speed = this.speed + number
    },
    brake (number) {
        number > this.speed
        ? this.speed = 0
        : this.speed = this.speed - number
    }
}

const a1 = Object.create(car)

```