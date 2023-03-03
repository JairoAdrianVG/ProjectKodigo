//Pilares de la Programacion Orientada a Objetos
//Los pilares son 4 y JS solo cumple 2

// Herencia  => La capacidad de una sub-clase(hija) de utilizar los metodos y atributos de la super-clase(padre).
// Polimorfismo => Un mismo metodo puede cambiar y tener varias formas.
// La clase hija puede alterar el comportamiento de un metodo del padre para su utilizacion 

// Encapsulamiento => Guardamos o limitamos el acceso a ciertos atributos o metodos de clase
// Abstraccion => El usuario solo va a interactuar con los atributos a traves de metodos seleccionados

function Vehiculo(color,marca,modelo,cantPuertas){
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.cantPuertas = cantPuertas
}

Vehiculo.prototype.acelerar = function(){
    return `Estoy acelerando mi ${this.modelo}`
}

class Coche extends Vehiculo {
    constructor(color,marca,modelo,cantPuertas,motor){
        //SUPER() METODO para seleccionar los atributos heredados
        super(color,marca,modelo,cantPuertas);
        this.motor = motor;
       
    }

    acelerar(){
        return `${super.acelerar()} BRUM BRUM`
    }
}

class Camion extends Vehiculo {
    constructor(color,marca,modelo,cantPuertas,cantRuedas){
        //SUPER() METODO para seleccionar los atributos heredados
        super(color,marca,modelo,cantPuertas);
        this.cantRuedas = cantRuedas;
       
    }

    acelerar(){
        return `${super.acelerar()} BROM BROM `
    }
}


class Camioneta extends Vehiculo {
    constructor(color,marca,modelo,cantPuertas,capacidadCarga){
        //SUPER() METODO para seleccionar los atributos heredados
        super(color,marca,modelo,cantPuertas);
        this.capacidadCarga = capacidadCarga;
       
    }

    acelerar(){
        return `${super.acelerar()} BRAM BRAM `
    }
}

class Moto extends Vehiculo{
    constructor(color,marca,modelo,tipoMoto){
        //SUPER() METODO para seleccionar los atributos heredados
        super(color,marca,modelo);
        this.tipoMoto = tipoMoto;
    }

    acelerar(){
        return `${super.acelerar()} ROM ROM `
    }
}

let coche1 = new Coche("Rojo","Ford","Explorer",4,"V8 Hemi");
let camion1 = new Camion("Rojo","Mercedez Benz","110",2,6);
let camioneta = new Camioneta("Negro","Toyota","Hilux",2,"1000kg");
let moto1 = new Moto("Azul","Suzuki","GSX-S","Sport");
moto1.modelo = "GSX-R"
console.log(moto1.modelo);
/*
console.log(moto1.acelerar());
console.log(coche1.acelerar());
console.log(camion1.acelerar());
console.log(camioneta.acelerar());
*/
