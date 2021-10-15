let arrayPersons = [
  {
      name: "Phibee", age: 25, voted: true, gender: "mujer"
  },
  {
      name: "Katrinka", age: 26, voted: false, gender: "mujer"
  },
  {
      name: "Bruno", age: 48, voted: false, gender: "hombre"
  },
  {
      name: "Jon", age: 22, voted: true, gender: "hombre"
  },
  {
      name: "Brian", age: 20, voted: false, gender: "hombre"
  },
  {
      name: "Eugene", age: 38, voted: true, gender: "hombre"
  },
  {
      name: "Big Bob", age: 29, voted: true, gender: "hombre"
  },
  {
      name: "Ximena", age: 40, voted: false, gender: "mujer"
  },
  {
      name: "Paulet", age: 37, voted: false, gender: "mujer"
  },
  {
      name: "Harold", age: 45, voted: true, gender: "hombre"
  },
  {
      name: "Gerald", age: 22, voted: false, gender: "hombre"
  },
  {
      name: "Arnold", age: 35, voted: true, gender: "hombre"
  },
  {
      name: "Gelga", age: 28, voted: true, gender: "mujer"
  },
  {
      name: "Lila", age: 18, voted: true, gender: "mujer"
  },
  {
      name: "Rhonda", age: 18, voted: true, gender: "mujer"
  },
]

/*
Usar reduce para obtener la siguiente informacion
- Un array con aquellas personas que se vacunaron
- la edad promedio de todos los vacunados
- un array con aquellas personas que se vacunaron y que son menores a 30 años
- la edad promedio de los no vacunados
- el porcentaje de vacunados vs no vacunados
- el procentaje de mujeres que se vacunaron
- el porcentaje de los hombres que vacunarion
*/

// const vacunadosJovenes = () => {
//   return arrayPersons.reduce((contador,persona) => {
//   if (persona.age<30 && persona.voted==true){
//     contador.push(persona)
//   }
//   return contador;
// }, [])
// // return result;
// }
// console.log(vacunadosJovenes())


// Ejercicio 3


const vacunadosJovenes = arrayPersons.reduce((contador,persona) => {
  if (persona.age<30 && persona.voted==true){
    contador.push(persona)
  }
  return contador;
}, [])
console.log(vacunadosJovenes)

// Ejercicio 4

function getAverageAgeNotVoted(arrayPersons){

  let i = 0;
  const notVotedPerson = arrayPersons.reduce((acumulate, current) => { 
      //current.voted == false ? acumulate += current.age: acumulate;
  
      if(current.voted == false){
          i ++;
          return acumulate += current.age;
      }
      else{
          return acumulate;
      }

  }, 0);

  return (notVotedPerson / i).toFixed(2);

}

console.log(getAverageAgeNotVoted(arrayPersons));

// Ejercicio 5

const porcentajeVacunacion = () => {
  let result = arrayPersons.reduce( (contador, persona) => {
  if(persona.voted ==true){
    contador.push(persona);
  }
  return contador;
}, [])  
let porcentajeVacunados = result.length/arrayPersons.length * 100;
let porcentajeNoVacunados= 100-porcentajeVacunados;
return console.log(`El porcentaje de vacunados es ${porcentajeVacunados} y el de no vacunados es ${porcentajeNoVacunados}`)

  
}
porcentajeVacunacion();