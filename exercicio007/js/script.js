function executar() {
    let n = parseInt(prompt("Digite um número inteiro:"));

    if (n <= 1) {
        alert("Não é primo.");
        return;
    }

    let i = 2;
    let primo = true;

    do {
        if (n % i === 0) {
            primo = false;
        }
        i++;
    } while (i < n && primo);

    alert(primo ? "É primo." : "Não é primo.");
}