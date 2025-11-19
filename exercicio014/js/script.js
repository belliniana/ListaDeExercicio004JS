function executar() {
    let n = parseInt(prompt("Digite um número inteiro:"));
    let resultado = 1;

    if (n < 0) {
        alert("Não existe fatorial de número negativo!");
        return;
    }

    let i = n;

    do {
        resultado *= i;
        i--;
    } while (i >= 1);

    alert("O fatorial de " + n + " é: " + resultado);
}