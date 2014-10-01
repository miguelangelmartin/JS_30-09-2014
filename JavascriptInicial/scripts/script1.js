/*EJEMPLO 1*/

/*
var espar = function (numero1) {
    return numero1 % 2 == 0;
}
*/

for (var i = 0; i < 10; i++) {
    document.writeln("El número " + i + (espar(i) ? " es par" : " no es par"));
    document.writeln("<br />");
}


/*declaramos una función pública, x ello no importa el orden*/
function espar(numero1) {
    return numero1 % 2 == 0;
}