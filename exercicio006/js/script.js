function executar() {
    let n = parseInt(prompt("Digite um número inteiro positivo:"));

    if (n <= 0) {
        alert("Digite um número maior que zero.");
        return;
    }

    let i = 1;
    let resultado = "";

    do {
        if (n % i === 0) {
            resultado += i + " ";
        }
        i++;
    } while (i <= n);

    alert("Divisores de " + n + ":\n" + resultado);
}