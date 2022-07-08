"use strict";
class Carro {
    constructor(id, placa, modelo, marca, cor) {
        this.id = 0;
        this.placa = '';
        this.modelo = '';
        this.marca = '';
        this.cor = '';
        this.setId(id);
        this.setPlaca(placa);
        this.setModelo(modelo);
        this.setMarca(marca);
        this.setCor(cor);
    }
    display() {
        console.log(`Id : ${this.id} \n`);
        console.log(`Placa: ${this.placa} \n`);
        console.log(`Modelo: ${this.modelo} \n`);
        console.log(`Marca: ${this.marca} \n`);
        console.log(`Cor: ${this.cor} \n`);
    }
    roncoMotor() {
        console.log('ROOOOOINNC');
    }
    acelerar() {
        console.log('RANDANDANDAN');
    }
    frear() {
        console.log('GUIGUIGUIIII');
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    setPlaca(placa) {
        if (placa.length != 7) {
            console.log('Atenção! A placa deve conter 7 caracteres');
        }
        else {
            this.placa = placa;
        }
    }
    getPlaca() {
        return this.placa;
    }
    setModelo(modelo) {
        if (modelo.length < 3) {
            console.log('Atenção! O modelo do carro deve conter no mínimo 3 caracteres');
        }
        else {
            this.modelo = modelo;
        }
    }
    getModelo() {
        return this.modelo;
    }
    setMarca(marca) {
        if (marca.length < 3) {
            console.log('Atenção! O marca do carro deve conter no mínimo 3 caracteres');
        }
        else {
            this.marca = marca;
        }
    }
    getMarca() {
        return this.marca;
    }
    setCor(cor) {
        this.cor = cor;
    }
    getCor() {
        return this.cor;
    }
}
let car1 = new Carro(123, 'JOY2707', 'Kicks', 'Nissan', 'Marrom');
car1.display();
car1.acelerar();
car1.roncoMotor();
car1.frear();
//# sourceMappingURL=carros.js.map