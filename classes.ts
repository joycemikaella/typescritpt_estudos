class Pessoa {
    id: number = 0
    nome: string = ''

    constructor(id: number, nome: string){
        this.id = id
        this.nome = nome
    }
    
    ola(): void {
        console.log(`Ola ${this.nome}`);

    }
    display(): void {
        console.log(`Id: ${this.id}`)
        console.log(`Nome: ${this.nome} \n`)

    }
}

let ob1: Pessoa
ob1 = new Pessoa(1, 'Joyce');/* foi construido o obj
ob1.id = 1
ob1.nome = 'Joyce'*/
ob1.display()

let ob2: Pessoa
ob2 = new Pessoa(2, 'Mikaella');/*
ob2.id = 2
ob2.nome = 'Mikaella'*/
ob2.display()

/*
console.log(ob1)
console.log(ob2)
ob1.ola()
ob2.ola()
*/