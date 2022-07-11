abstract class Person {
    name: string;
        constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(nome : string): Person
    abstract pesquisar(nome: string): string
}
/*let ob1: Person
ob1 =  new Person ('Maria')*/
class Employee extends Person {     
   
    find(nome:string): Person { 
        return new Employee(nome)
    }
    pesquisar(nome: string): string {
        return nome;
    }
}


let ep1: Person = new Employee('Joyce')
ep1.display(); //Joyce

let ep2: Person = ep1.find('Mikaella')
ep2.display()