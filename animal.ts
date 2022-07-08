class Animal {
    especie: string = ''
    raca: string = ''
    habitat: string = ''
    som: string = ''

    constructor(raca: string, habitat: string){
        this.raca = raca
        this.habitat = habitat
    }
    barulho(som:string): void {

        console.log(`O animal emite : ${som}`);

    }

}

let pet1 : Animal = new Animal('Pitbull', 'Terrestre');
/*
let pet1: Animal = new Animal();
pet1.especie = 'Canina'
pet1.raca = 'Pastor alemão'
pet1.habitat = 'Doméstico'
pet1.som = 'Woof woof'*/
pet1.barulho('Woof woof')

/*
let pet2: Animal
pet2 = new Animal();
pet2.especie = 'Felina'
pet2.raca = 'Simaês'
pet2.habitat = 'Doméstico'
pet2.som = 'Meaw meaw'
pet2.barulho()
*/

