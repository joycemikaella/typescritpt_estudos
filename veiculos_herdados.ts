import{Veiculo} from "./veiculo"

class Moto extends Veiculo {
    cilindradas: number

    constructor(placa: string, modelo: string, marca: string, cilindradas: number) {
        super(placa, modelo, marca)
        this.cilindradas = cilindradas
    }


    show(): void {
        super.show()
        console.log(`Cilindradas: ${this.cilindradas}`)

    }

}
/*
let m1: Moto = new Moto(`def-3436`, 'Bros', 'Honda', 200)
m1.show()*/

class Automovel extends Veiculo {
    numeroPortas: number

    constructor(placa: string, modelo: string, marca: string, numeroPortas: number) {
        super(placa, modelo, marca)
        this.numeroPortas = numeroPortas
    }


    show(): void {
        super.show()
        console.log(`Numero de Portas: ${this.numeroPortas}`)

    }

}

/*let a1: Automovel = new Automovel(`jmv-2731`, 'Kicks', 'Nissan', 2)
a1.show()*/


class Passeio extends Automovel {
    tipo: string

    constructor(placa: string, modelo: string, marca: string, numeroPortas: number, tipo: string) {
        super(placa, modelo, marca, numeroPortas)
        this.tipo = tipo
    }


    show(): void {
        super.show()
        console.log(`Numero de Portas: ${this.tipo}`)

    }

}

let pa1 = new Passeio('FGH-4567', 'Ka', 'Ford', 4, 'Sedan')
pa1.show()