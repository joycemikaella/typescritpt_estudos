"use strict";
class CalculadoraAbstrata {
    somar(n1, n2) {
        return n1 + n2;
    }
}
class Calculadora2 extends CalculadoraAbstrata {
    subtrair(n1, n2) {
        return n1 - n2;
    }
}
let ca1 = new Calculadora2();
console.log(ca1.somar(10, 20));
console.log(ca1.subtrair(10, 20));
//# sourceMappingURL=novoexemploclasseabstrata.js.map