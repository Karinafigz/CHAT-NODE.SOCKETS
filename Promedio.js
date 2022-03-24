//sacar el promedio de 3 calif parciales
let cal=parseFloat(prompt('Ingrese la primera calificación'));
let cal2=parseFloat(prompt('Ingrese la segunda calificación'));
let cal3=parseFloat(prompt('Ingrese la tercera calificación'));


let promedio=(cal+cal2+cal3)/3;
document.write("Tu promedio es:" + promedio );

        if (promedio >=8.0) {
            document.write('  Estas aprobado');
          
        } else if(promedio <8.0){
            document.write( '  Reprobado');
        }
        
        
