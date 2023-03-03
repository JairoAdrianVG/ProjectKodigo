//Arrays
//Un array es una estructura de dato, que nos permite almacenar 
//varios datos dentro de una misma referencia

//Declaracion de un array
let array = [110]; 
console.log(array);

let array2 = [1, "hola", true, 3.5,100];
console.log(array2);

// Accediendo a un dato en particular
console.log(array2[1]);

//Metodos de arrays
//Ingresar un dato al final del array
array2.push(5);
console.log(array2);

//Eliminar el ultimo dato del array
array2.pop();
console.log(array2);

//Ingresar un dato al principio de un array
array2.unshift(10);
console.log(array2);

//Eliminar el primero del array
array2.shift();
console.log(array2);

//Unir dos arrays
//console.log(array2.concat(array));

//Saber el largo de nuestro array
let largo = array2.length
//console.log(largo);

function agregarDatoArray(array,dato){
    array.push(dato);
    return array;
}

function unirDosArrays(array1, array2){
    array1.concat(array2)
}

//console.log(agregarDatoArray(array2,15));


//Bucles con los Arrays
/*for(let i = 0; i < array2.length; i++ ){
    console.log(array2[i]);
}
*/

function recorrerArray(array){

    for(let i = 0; i < array.length; i++ ){
        console.log(array[i]);
    }
}

//recorrerArray(array2);
let numeros = [100,5,123,15,22];
recorrerArray(numeros);
