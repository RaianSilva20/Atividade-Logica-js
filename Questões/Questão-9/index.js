let tentativas = 3;




while (tentativas > 0) {
    let login = prompt("Digite seu login: ").toUpperCase();
     if (!/^[A-Za-z]+$/.test(login)) {
        console.log("Digite apenas letras!");
        continue;
    }
    if (login === "ADMIN") {
        console.log("Login correto!");
        break;
    } else {
        tentativas--;
        if (tentativas > 0) {
            console.log("Login incorreto. Tente novamente.");
        }
    }
}
if (tentativas === 0) {
    console.log("Número máximo de tentativas excedido.");
}




while (tentativas > 0) {
    let senha = prompt("Digite a senha: ");
    if (!/^[0-9]+$/.test(senha)) {
        console.log("Digite apenas números!");
        continue;
    }

    if (senha === "1234") {
        console.log("Senha correta!");
        break;
    } else {
        tentativas--;
        if (tentativas > 0) {
            console.log("Senha incorreta. Tente novamente.");
        }
    }
}
if (tentativas === 0) {
    console.log("Número máximo de tentativas excedido.");
}

