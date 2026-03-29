let numero;
let soma = 0;

do {
    numero = Number(prompt("Digite um número (0 para parar):"));

    if (!isNaN(numero)) {
        soma += numero;
    }

} while (numero !== 0);

console.log("A soma de todos os números digitados é: " + soma);