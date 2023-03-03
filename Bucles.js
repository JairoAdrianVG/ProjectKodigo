// Bucles
// Repetir una porcion de codigo

//let contador = 0;

//WHILE -> MIENTRAS
// while -> palabra reservada
// () -> condicion -> condicion de corte del bucle
// {} -> codigo a ejecutar
//while(condicion){codigo a ejecutar}

/*
while(contador >= 1 && contador <= 5){ //mientras contador sea menor a 5
    console.log(contador); //imprimi contador
    contador++; //incrementar contador en 1=
}   
*/

//DO WHILE
// Primero ejecuta un codigo
// Y luego evalua la condicion

/*
do{
    console.log(contador);
    contador++;
} while(contador >= 1 && contador <= 5) //false
*/

//Bucle FOR
// for -> Palabra reservada
// () -> contener 3 argumentos 
// let contador -> inicializacion o asignacion
// condicion -> condicion de corte
// incremento o decremento
// {} -> codigo a ejecutar

for(let contador = 0; contador >= 1 && contador <= 5; contador++){
    console.log(contador);
}

