function executar() {
    let soma = 0;
    let contador = 0;
    let nome;

    do {
        nome = prompt("Digite um nome (ou 'fim' para encerrar):");

        if (nome.toLowerCase() !== "fim") {
            let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
            soma += idade;
            contador++;
        }

    } while (nome.toLowerCase() !== "fim");

    if (contador > 0) {
        let media = soma / contador;
        alert("A média das idades é: " + media);
    } else {
        alert("Nenhuma idade foi informada.");
    }
}