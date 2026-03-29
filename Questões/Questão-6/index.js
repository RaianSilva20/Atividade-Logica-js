let nota1 = prompt("Digite a primeira nota: ");
let nota2 = prompt("Digite a segunda nota: ");
let nota3 = prompt("Digite a terceira nota: ");

let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) /3;


if (media > 10 || media < 0) {
    console.log("Erro: Média inválida. As notas devem estar entre 0 e 10.");
}
else if (media >= 7) {
    console.log("Aprovado! Sua média é: " + media);
} else if (media >= 5 && media < 7) {
    console.log("Recuperação! Sua média é: " + media);
} else if (media < 5) {
    console.log("Reprovado! Sua média é: " + media);
} else {
    console.log("Erro: Média inválida.");
}