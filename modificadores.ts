class Empregado {
    matricula: number = 0
    private nome: string = ''
    //quando tirar o construtor, lembrar de inicializar a variável

    constructor(matricula: number, nome: string) {
        this.matricula = matricula
        //this.nome = nome
        this.setNome(nome)
    }

    setNome(nome: string): void {
        if (nome.length < 3) {
            console.log('O nome deve ter no mínimo 3 caracteres')
        } else {

            this.nome = nome
        }
    }

    getNome(): string {
        return this.nome
    }

    display(): void {
        console.log(`Matricula: ${this.matricula}`)
        console.log(`Nome: ${this.nome}`)

    }
}

let emp1: Empregado = new Empregado(123, 'ze')
//let emp1 = new Empregado()
//emp1.matricula = 123
//emp1.nome = //não funciona quanto tá private
//console.log(emp1.nome)
//console.log(emp1.display()) //Esse é pra quando está sem construtor
//emp1.setNome('Joy')
emp1.display()