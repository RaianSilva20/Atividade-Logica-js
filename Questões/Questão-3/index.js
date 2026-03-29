let num1 = prompt ("Digite o primeiro número: ");
let num2 = prompt ("Digite o segundo número: ");
var calculo = prompt ("Digite o tipo de cálculo que deseja realizar: +, -, *, /: ");

if (calculo === "+") {
    console.log("O resultado da soma é: " + (parseFloat(num1) + parseFloat(num2)));
} else if (calculo === "-") {
    console.log("O resultado da subtração é: " + (parseFloat(num1) - parseFloat(num2)));
} else if (calculo === "*") {
    console.log("O resultado da multiplicação é: " + (parseFloat(num1) * parseFloat(num2)));
} else if (calculo === "/") {
    if (num2 != 0) {
        console.log("O resultado da divisão é: " + (parseFloat(num1) / parseFloat(num2)));
    } else {
        console.log("Erro: Divisão por zero não é permitida.");
    }


}

    console.log("Sua operação acabou de ser realizada!!!");
