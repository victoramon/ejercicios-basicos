//1
/*var nombre = prompt ('¿Cual es tu nombre?');

document.write ('Hola ' + nombre + ' saludos desde javascript');
*/

//2
var num1 = parseInt( prompt ('Dime un número'));
var num2 = parseInt( prompt ('Dime otro número'));

function suma (num1, num2){
    var resultado1 = num1 + num2;
    document.write ('suma= ' + resultado1 + '</br>');
}

suma (num1, num2)

function resta (num1, num2){
    var resultado2 = num1 - num2;
    document.write ('resta= ' + resultado2 + '</br>');

}

resta (num1, num2)

function multiplicacion (num1, num2){
    var resultado3 = num1 * num2;
    document.write ('multiplicacion= ' + resultado3 + '</br>');

}

multiplicacion (num1, num2)

function division (num1, num2){
    var resultado4 = num1 / num2;
    document.write ('division= ' + resultado4 + '</br>');
}

division (num1, num2)


//+ '</br>' - es un "enter" entre las funciones