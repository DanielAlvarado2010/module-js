let numero = parseInt(window.prompt("Dame un numero del 1 al 100 y te dire si es par o impar"))

let resultado=numero%2;

if (resultado==1 && numero<=100) {
    console.log(`Èl numero ${numero} es un numero impar`);
}
else if (resultado==0 && numero<=100) {
    console.log(`Èl numero ${numero} es un numero par`);
}
else if (numero>=0 && numero>100) {
    console.log(`Esta no es una opción valida`);
}
else {
    console.log(`Caracter no valido`);
}

