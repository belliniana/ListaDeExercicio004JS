function executar() {
    let contador = 1;
    let soma = 0;

    do {
        let nome = prompt("Digite o nome da pessoa " + contador + ":");
        let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
        soma += idade;
        contador++;
    } while (contador <= 5);

    let media = soma / 5;
    alert("A média das idades é: " + media);
}