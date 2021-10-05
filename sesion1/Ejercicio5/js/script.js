let string1=prompt("Escribe una frase")
let string2=prompt("Escribe otra frase")

let size1=string1.length;
let size2=string2.length;

if (size1>size2){
    console.log(`La frase más larga es ${string1}`);
} else if(size2>size1){
    console.log(`La frase más larga es ${string2}`);
}else {
    console.log(`Las dos frases son del mismo tamaño`);
}