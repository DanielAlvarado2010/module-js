let nombre = window.prompt(`Escribe tu nombre y te dire cuantas vocales tiene`);
vocales=nombre.replace(/[^aeiouAEIOU]/g, "").length;
console.log(`La cantidad de vocales que tiene tu nombre es ${vocales}`);