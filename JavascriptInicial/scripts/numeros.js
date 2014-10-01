var n1 = prompt('Dime el numero 1');
var n2 = prompt('Dime el numero 2');

if (isNaN(n1) || isNaN(n2))
    alert('Error, solo números');
else {
    var n3 = n1 / n2;


    if (isFinite(n3)) // if(n3!=Infinity && n3!=-Infinity) esto sería lo mismo, pero es más cómodo lo 1º
        alert(n3);
    else
        alert('La operación es Infinita');
}