"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
/*let ob1: Person
ob1 =  new Person ('Maria')*/
class Employee extends Person {
    find(nome) {
        return new Employee(nome);
    }
    pesquisar(nome) {
        return nome;
    }
}
let ep1 = new Employee('Joyce');
ep1.display(); //Joyce
let ep2 = ep1.find('Mikaella');
ep2.display();
//# sourceMappingURL=classeabstrata.js.map