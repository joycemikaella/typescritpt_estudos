interface IProduto {
    id: number
    descricao: string
    preco: number
    show(): void
}

interface ICalculos {
    calcularDesconto(taxa: number): number
    calcularAcrescimento(taxa: number): number
}
class Produto implements IProduto, ICalculos {
    id: number
    descricao: string
    preco: number
    estoque : number

    constructor(id: number, descricao: string, preco: number, estoque: number) {
        this.id = id
        this.descricao = descricao
        this.preco = preco
        this.estoque = estoque
    }

    show(): void {
        console.log(`Id: ${this.id}`)
        console.log(`Descrição: ${this.descricao}`)
        console.log(`Preço: ${this.preco}`)
        console.log(`Estoque: ${this.estoque}`)
    }

    calcularAcrescimento(taxa: number): number {
        return this.preco * (taxa/100)
    }

    calcularDesconto(taxa: number): number {
        let resultado = this.preco * (taxa/100)
        return resultado
    }

    precoComDesconto(taxa:number) {
        console.log(`Preço com desconto 1; ${(p1.preco - p1.calcularDesconto(taxa)).toFixed(2)}`)
    }

}

let p1: Produto = new Produto(1, 'Feijão',7.89,10)
p1.show()
console.log(p1.calcularDesconto(10).toFixed(2)) //mostra o valor do desconto
p1.precoComDesconto(20)