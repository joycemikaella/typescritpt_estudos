"use strict";
class Pessoa {
    constructor(id, nome) {
        this.id = 0;
        this.nome = '';
        this.cpf = ''; //adicionado depois
        this.id = id;
        this.nome = nome;
    }
    setCpf(cpf) {
        if (cpf.length != 11) {
            console.log('O cpf deve ter 11 dígitos');
        }
        else {
            this.cpf = cpf;
        }
    }
    ola() {
        console.log(`Ola ${this.nome}`);
    }
    display() {
        console.log(`Id: ${this.id}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Nome: ${this.nome} \n`);
    }
}
let ob1;
ob1 = new Pessoa(1, 'Joyce'); /* foi construido/instanciado o obj
ob1.id = 1
ob1.nome = 'Joyce'*/
ob1.setCpf('12332123101');
ob1.display();
//let ob2: Pessoa
//ob2 = new Pessoa(2, 'Mikaella');
//ob2.id = 2
//ob2.nome = 'Mikaella'
//ob2.display()
/*let ob3: Pessoa = new Pessoa()
ob3.id = 3
ob3.nome = 'Aciole'
ob3.display()

console.log(ob1)
console.log(ob2)
ob1.ola()
ob2.ola()
*/ 
//# sourceMappingURL=classes.js.map