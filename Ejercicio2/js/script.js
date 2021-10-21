class Persona {
    constructor (nombre, lastName) {
        this.nombre = nombre;
        this.lastName = lastName;
    }
}

class Koder extends Persona {
    constructor (nombre, lastName,bootcamp, generation) {
        super(nombre, lastName)
        this.bootcamp = bootcamp;
        this.generation = generation;
    }
}

const Koder1 = new Koder("Daniel", "Alejandro", "Javascript", "14")

console.log(Koder1)