function executar() {
    let contador = 1;
    let soma = 0;

    do {
        let numero = parseFloat(prompt("Digite o " + contador + "º número:"));
        soma += numero;
        contador++;
    } while (contador <= 5);

    let media = soma / 5;
    alert("A média dos 5 números é: " + media);
}