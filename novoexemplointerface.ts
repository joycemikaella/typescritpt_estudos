interface ICalculadora {
    somar(n1:number, n2: number):number
    subtrair(n1: number, n2: number):number
}

class Calculadora implements ICalculadora{
    somar(n1: number, n2: number): number {
        return n1 + n2
    }
    subtrair(n1: number, n2: number): number {
        return n1 - n2
    }
}

let c1: Calculadora = new Calculadora()
console.log(c1.somar(10,20))
console.log(c1.subtrair(10,20))