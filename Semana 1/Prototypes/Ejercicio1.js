function Person( name, weight, height){
    this.name = name
    this.weight = weight
    this.height = height
    this.greet = name => `Hola ${name}, me llamo ${this.name}`
    this.bmi = () => this.weight / (this.height * this.height)
}

const pedro = new Person("Pedro", 72, 1.5);
console.log(pedro.greet("Maria"));
console.log(pedro.bmi());