"use strict";
class Animal {
    constructor(raca, habitat) {
        this.especie = '';
        this.raca = '';
        this.habitat = '';
        this.som = '';
        this.raca = raca;
        this.habitat = habitat;
    }
    barulho(som) {
        console.log(`O animal emite : ${som}`);
    }
}
let pet1 = new Animal('Pitbull', 'Terrestre');
/*
let pet1: Animal = new Animal();
pet1.especie = 'Canina'
pet1.raca = 'Pastor alemão'
pet1.habitat = 'Doméstico'
pet1.som = 'Woof woof'*/
pet1.barulho('Woof woof');
/*
let pet2: Animal
pet2 = new Animal();
pet2.especie = 'Felina'
pet2.raca = 'Simaês'
pet2.habitat = 'Doméstico'
pet2.som = 'Meaw meaw'
pet2.barulho()
*/
//# sourceMappingURL=animal.js.map