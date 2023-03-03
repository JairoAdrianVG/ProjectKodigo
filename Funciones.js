// Utilidad de funciones
// Codigo reutilizable, que se ejecute cuando necesitemos y la cantidad de veces que necesitemos

//Funciones Declaradas
//Funcion Anonima
let saludo = function () {
    return "Hola";
}

console.log(saludo());

//Funcion Flecha -> Fat Arrow Function
// SACAMOS LA PALABRA RESERVADA FUNCTION
// Recibimos Parametro () y le decimos que ejecute lo siguiente => 
let despedir = () => "Chau";

despedir()

// Parametros en las funciones
// No ha limite de parametros que pueda recibir
// 

function Sumar(a,b) {
    console.log(a+b);
    return a+b;
}

let resultado = Sumar(4,10);
//console.log(resultado);
//console.log(Sumar(resultado,6));

let suma = function (a,b) {
    return a+b;
}

console.log(suma(4,10));