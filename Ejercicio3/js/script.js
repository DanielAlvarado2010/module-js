let dato = window.prompt("Escribe una cantidad de varios digitos y te dire cual es el resultado de su suma")

let cadena = dato.match(/[123456789]/g);

console.log(cadena)

let suma=0;

for(let i=0; i<cadena.length; i++) {
   suma=suma+parseInt(cadena[i]);    
}
console.log(`El resultado de tu suma es ${suma}`);