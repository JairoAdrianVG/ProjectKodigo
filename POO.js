//Programacion Orientada a Objetos (POO) 
// Es una manera de programar con el objetivo de la reutilizacion.
// Representar algo "de la vida real"

//La cual nace de 2 elementos principales
// Clase => La clase es un molde el cual va a tener caracteristicas y funciones. Con la idea de crear objetos en base a ella.

// Objeto =>

//Programacion Orientada a Objetos a traves de Clases

class Persona{

    //Atributos => Son las caracteristicas de una clase
    
    //constructor => es un metodo reservado a partir del cual vamos a utilizar para crear objetos
    constructor(nombre,apellido,altura,edad,identificacion){

        //Dentro del constructor declaramos los atributos de la clase
         this.nombre = nombre;
         this.apellido = apellido;
         this.altura = altura;
         this.edad = edad;
         this.identificacion = identificacion;

         //THIS => Apuntador el cual indica que ESO es propio de esta clase
    }

    //metodos => Funciones de una clase
    caminar(){
        return `Estoy caminando y me llamo ${this.nombre}`
    }

}

//Inicializacion de objeto PERSONA
//Let NombreObjeto = new(nueva) NombreClase()
let persona1 = new Persona("Jairo","Vega Romero",170,24,11234655);
//console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.caminar());

//Programacion Orientada a Objetos a traves de Prototype

function Vehiculo(color,marca,modelo){
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
}

Vehiculo.prototype.acelerar = function(){
    return `Estoy acelerando mi ${this.modelo}`
}

let vehiculo1 = new Vehiculo("Rojo","Toyota", "Corolla");
let vehiculo2 = new Vehiculo("Negro","Pagani", "Huayra");

vehiculo1.color = "Azul"
console.log(vehiculo1);
console.log(vehiculo1.acelerar());
console.log(vehiculo2.acelerar());

//DECLARACION DE OBJETOS JSON

let Animal = {
    raza: "Perro",
    color: "Marron",
    edad: 7
}

Animal.raza = "Gato";
Animal.color = "Negro";
Animal.edad = 8;
console.log(Animal.raza);
console.log(Animal.color);
console.log(Animal.edad);