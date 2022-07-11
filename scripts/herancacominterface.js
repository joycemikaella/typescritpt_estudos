"use strict";
class Produto {
    constructor(id, descricao, preco, estoque) {
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
        this.estoque = estoque;
    }
    show() {
        console.log(`Id: ${this.id}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Estoque: ${this.estoque}`);
    }
    calcularAcrescimento(taxa) {
        return this.preco * (taxa / 100);
    }
    calcularDesconto(taxa) {
        return this.preco * (taxa / 100);
    }
    precoComDesconto(taxa) {
        console.log(`Preço com desconto 1; ${p1.preco - p1.calcularDesconto(10)}`);
    }
}
let p1 = new Produto(1, 'Feijão', 7.89, 10);
p1.show();
console.log(p1.calcularDesconto(10)); //mostra o valor do desconto
p1.precoComDesconto(10);
//# sourceMappingURL=herancacominterface.js.map