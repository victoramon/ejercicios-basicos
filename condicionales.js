/*var edad = prompt('¿Cual es tu edad?');

if( edad >= 18) {
    //console.log('Eres mayor de edad');
    document.write('Eres mayor de edad');
 } else {
     //console.log('Eres menor de edad');
     document.write('Eres menor de edad');
 }*/

 /*Preguntarle al usuario su edad. Despues hacer una condicional if con las siguientes
 situaciones, si el usuario es mayor de 18 y menor de 29 años, mostrar mensaje 
 Felicidades has sido aceptado en el bootcamp de generation, en caso contrario
 mostrar mensaje: No cumples los requisitos del programa. */

 var edad = prompt('¿Cual es tu edad?');

 if( edad >= 18 && edad<= 29) {
     document.write('Felicidades has sido aceptado en el bootcamp de generation.');
 }else if( edad >= 30 || edad<= 17) {
     document.write('No cumples los requisitos del programa.');
 }