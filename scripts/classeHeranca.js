"use strict";
class Pessoas {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    ola() {
        console.log(`Ola ${this.nome}`);
    }
    display() {
        console.log(`Id: ${this.id}`);
        console.log(`Nome: ${this.nome} \n`);
    }
}
class PessoaFisica extends Pessoas {
    constructor(id, nome, cpf) {
        super(id, nome);
        this.cpf = '';
        this.cpf = cpf;
    }
}
class PessoaJuridica extends Pessoas {
    constructor(id, nome, cnpj) {
        super(id, nome);
        this.cnpj = '';
        this.cnpj = cnpj;
    }
}
let pf = new PessoaFisica(1, 'maria', '123');
//console.log(pf.id)
//console.log(pf.nome)
console.log(pf.getNome());
//pf.display()
console.log(pf.cpf);
let pj = new PessoaJuridica(1, 'Joyce', '321');
console.log(pj.getNome());
console.log(pj.cnpj);
//# sourceMappingURL=classeHeranca.js.map