let numero = parseFloat(window.prompt(`Dame tu peso y te dire cuanto pesarias en la luna`));

let gravedadluna=1.62;
let gravedadTierra=9.81;
let resultado=(numero/gravedadTierra)*gravedadluna;

console.log(`Tu peso en la luna sería de ${resultado}`)