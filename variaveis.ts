var nome: string = "João";
console.log(nome);

var isPresent: boolean = true;


//maneiras de declararar um array
let fruits: string[] = ["Banana", "Apple", "Orange"];
let fruits2: Array<string> = ["Banana", "Apple", "Orange"];

let values: (number | string)[] = [1, "João", "Maria"];
let values2: Array<number | string> = [1, "João", "Maria"];


var x: number = 10;

if (x == 10) {
    let y: number = 20;
    console.log(y);
}

console.log("Fim de programa")