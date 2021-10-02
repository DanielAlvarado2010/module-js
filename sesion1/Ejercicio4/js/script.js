let calificacion = parseFloat(window.prompt(`Dime tu calificación y te dire la letra correspondiente`))

switch (calificacion) {
    case (calificacion<=100 && calificacion>90) : {
        console.log (`Tu nota es A`);
    }
    break;
    case (calificacion<=90 && calificacion>80) :{
        console.log (`Tu nota es B`);
    }
    break;
    case (calificacion<=80 && calificacion>70): {
        console.log (`Tu nota es C`);
    }
    break;
    case (calificacion<=70 && calificacion>60): {
        console.log (`Tu nota es D`);
    }
    break;
    case (calificacion<=60 && calificacion>50): {
        console.log (`Tu nota es E`);
    }
    break;
    case (calificacion<50 & calificacion>=0): {
        console.log (`Tu nota es E`);
    }
    break;
    default :{
        console.log(`El dato introducido no es valido`);
    }
    break;
}
