let numeroA =parseInt(window.prompt("Dame dos numeros y te dire cual es mayor, ahora ingresa el primero"));
let numeroB =parseInt(window.prompt("Dame el segundo numero"));

if (numeroA<numeroB) {
    console.log(`El numero ${numeroB} es el mayor`);
    console.log(`El numero ${numeroA} es el menor`);
}
else if (numeroA>numeroB){
    console.log(`El numero ${numeroA} es el mayor`);
    console.log(`El numero ${numeroB} es el menor`);
}
else {
    console.log(`Los valores dados no son aceptables`);
}


