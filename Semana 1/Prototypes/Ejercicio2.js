function Car(){
    this.speed = 0
}

Car.prototype.speedUp = function(number) {
    this.speed = this.speed + number
}
Car.prototype.brake = function(number) {
    number > this.speed
    ? this.speed = 0
    : this.speed = this.speed - number
}

const a1 = new Car();
console.log(a1.speed); // 0

a1.speedUp(1);
a1.speedUp(2);
console.log(a1.speed);

a1.brake(2);
console.log(a1.speed);

a1.brake(3);
// la velocidad quedaría en -1, así que se deja en 0
console.log(a1.speed);