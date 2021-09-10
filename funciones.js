/*function suma(num1, num2) {
    var resultado = num1 + num2;
    console.log(resultado);
}

suma(2,5);
suma(10,18);
suma(25,3);
suma(25,3);
suma(25,3);
suma(25,3);*/

var num1 = prompt('Ingrese la primer cantidad');
var num2 = prompt('Ingrese la segunda cantidad');
var num3 = prompt('Ingrese la tercera cantidad');

var cantidades = [num1, num2, num3];
cantidades.sort();
document.write('El numero mayor es ', cantidades[2]);