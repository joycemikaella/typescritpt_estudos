abstract class CalculadoraAbstrata {
    somar(n1: number, n2: number): number {
        return n1 + n2
    }

    abstract subtrair(n1: number, n2: number):number
}

class Calculadora2 extends CalculadoraAbstrata {
    subtrair(n1: number, n2: number): number {
        return n1 - n2
    }
}

let ca1: Calculadora2 = new Calculadora2()
console.log(ca1.somar(10,20))
console.log(ca1.subtrair(10,20))