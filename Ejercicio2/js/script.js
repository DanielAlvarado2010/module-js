let numero
do{
numero=Number(prompt("Dame un numero que este entre 10 y 100"))
}
while(numero<10 || numero>100)

console.log(`Los numero pares antes de tu numero son:`);

let contador=1;

while(contador<numero){
    if(contador%2==0){
        console.log(`${contador}`)
    }
    // else{
    //     console.log("none")
    // }
    contador++;
}
