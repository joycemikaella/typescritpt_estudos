"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = require("./veiculo");
class Moto extends veiculo_1.Veiculo {
    constructor(placa, modelo, marca, cilindradas) {
        super(placa, modelo, marca);
        this.cilindradas = cilindradas;
    }
    show() {
        super.show();
        console.log(`Cilindradas: ${this.cilindradas}`);
    }
}
/*
let m1: Moto = new Moto(`def-3436`, 'Bros', 'Honda', 200)
m1.show()*/
class Automovel extends veiculo_1.Veiculo {
    constructor(placa, modelo, marca, numeroPortas) {
        super(placa, modelo, marca);
        this.numeroPortas = numeroPortas;
    }
    show() {
        super.show();
        console.log(`Numero de Portas: ${this.numeroPortas}`);
    }
}
/*let a1: Automovel = new Automovel(`jmv-2731`, 'Kicks', 'Nissan', 2)
a1.show()*/
class Passeio extends Automovel {
    constructor(placa, modelo, marca, numeroPortas, tipo) {
        super(placa, modelo, marca, numeroPortas);
        this.tipo = tipo;
    }
    show() {
        super.show();
        console.log(`Numero de Portas: ${this.tipo}`);
    }
}
let pa1 = new Passeio('FGH-4567', 'Ka', 'Ford', 4, 'Sedan');
pa1.show();
//# sourceMappingURL=veiculos_herdados.js.map