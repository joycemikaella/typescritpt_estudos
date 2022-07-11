"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    constructor(placa, modelo, marca) {
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
    }
    show() {
        console.log(`Placa ${this.placa}`);
        console.log(`Modelo ${this.modelo}`);
        console.log(`Marca ${this.marca}`);
    }
}
exports.Veiculo = Veiculo;
//# sourceMappingURL=veiculo.js.map