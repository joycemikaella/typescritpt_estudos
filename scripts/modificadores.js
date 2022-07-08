"use strict";
class Empregado {
    //quando tirar o construtor, lembrar de inicializar a variável
    constructor(matricula, nome) {
        this.matricula = 0;
        this.nome = '';
        this.matricula = matricula;
        //this.nome = nome
        this.setNome(nome);
    }
    setNome(nome) {
        if (nome.length < 3) {
            console.log('O nome deve ter no mínimo 3 caracteres');
        }
        else {
            this.nome = nome;
        }
    }
    getNome() {
        return this.nome;
    }
    display() {
        console.log(`Matricula: ${this.matricula}`);
        console.log(`Nome: ${this.nome}`);
    }
}
let emp1 = new Empregado(123, 'ze');
//let emp1 = new Empregado()
//emp1.matricula = 123
//emp1.nome = //não funciona quanto tá private
//console.log(emp1.nome)
//console.log(emp1.display()) //Esse é pra quando está sem construtor
//emp1.setNome('Joy')
emp1.display();
//# sourceMappingURL=modificadores.js.map