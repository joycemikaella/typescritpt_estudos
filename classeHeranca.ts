class Pessoas {

    id: number

    private nome: string



    constructor(id: number, nome: string) {

        this.id = id

        this.nome = nome

    }



    getNome(): string {

        return this.nome

    }



    ola(): void {

        console.log(`Ola ${this.nome}`)

    }



    display(): void {

        console.log(`Id: ${this.id}`)

        console.log(`Nome: ${this.nome} \n`)

    }

}



class PessoaFisica extends Pessoas {

    cpf: string = ''

    constructor(id: number, nome: string, cpf: string) {

        super(id, nome)

        this.cpf = cpf

    }

}
class PessoaJuridica extends Pessoas {

    cnpj: string = ''

    constructor(id: number, nome: string, cnpj: string) {

        super(id, nome)

        this.cnpj = cnpj

    }

}


let pf = new PessoaFisica(1, 'maria', '123')

//console.log(pf.id)

//console.log(pf.nome)

console.log(pf.getNome())

//pf.display()

console.log(pf.cpf)


let pj = new PessoaJuridica(1, 'Joyce', '321')
console.log(pj.getNome())
console.log(pj.cnpj)