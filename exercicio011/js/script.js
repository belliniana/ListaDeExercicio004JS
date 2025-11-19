function executar() {
    let n = parseInt(prompt("Digite um número inteiro:"));
    let soma = 0;
    let i = 1;

    do {
        if (i % 2 === 0) {
            soma += i;
        }
        i++;
    } while (i <= n);

    alert("A soma dos números pares até " + n + " é: " + soma);
}