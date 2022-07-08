"use strict";
class Pessoa {
    constructor(id, nome) {
        this.id = 0;
        this.nome = '';
        this.id = id;
        this.nome = nome;
    }
    ola() {
        console.log(`Ola ${this.nome}`);
    }
    display() {
        console.log(`Id: ${this.id}`);
        console.log(`Nome: ${this.nome} \n`);
    }
}
let ob1;
ob1 = new Pessoa(1, 'Joyce'); /* foi construido o obj
ob1.id = 1
ob1.nome = 'Joyce'*/
ob1.display();
let ob2;
ob2 = new Pessoa(2, 'Mikaella'); /*
ob2.id = 2
ob2.nome = 'Mikaella'*/
ob2.display();
/*
console.log(ob1)
console.log(ob2)
ob1.ola()
ob2.ola()
*/ 
//# sourceMappingURL=classes.js.map