let numero = parseInt(window.prompt("Escribe un numero y te dare la tabla de multiplicar hasta el 10 de dicho numero"))
let resultado;
let i;

for(i=1;i<=10;i++) {
    resultado = numero*i;
    console.log(`${numero} por ${i} es ${resultado}` )
}