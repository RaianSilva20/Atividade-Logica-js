let num1 = prompt("Digite o primeiro número: ");
let num2 = prompt("Digite o segundo número: ");     
let num3 = prompt("Digite o terceiro número: ");
let num4 = prompt("Digite o quarto número: ");
let num5 = prompt("Digite o quinto número: ");
let soma = 0;
if (num1 > 0 || num2 > 0 || num3 > 0 || num4 > 0 || num5 > 0) {
if (num1 > 0 ) {
    soma = soma + 1;
}  if (num2 > 0) {
    soma = soma + 1;
}  if (num3 > 0) {
    soma = soma + 1 ;
}  if (num4 > 0) {
    soma = soma + 1;
}  if (num5 > 0) {
    soma = soma + 1;
}
console.log("O número de números positivos é: " + soma);
} else {
    console.log("Nenhum número é positivo.");
}