class Veiculo {
    placa: string
    modelo: string
    marca: string

    constructor(placa: string, modelo: string, marca: string) {

        this.placa = placa
        this.modelo = modelo
        this.marca = marca
    }

    show(): void {
        console.log(`Placa ${this.placa}`)
        console.log(`Modelo ${this.modelo}`)
        console.log(`Marca ${this.marca}`)
       }

}
/*let v1: Veiculo = new Veiculo('abc-1234', 'corsa', 'chevrolet')
v1.show()*/

export {Veiculo}

