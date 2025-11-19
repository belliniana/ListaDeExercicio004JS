function executar() {
    let i = 1;
    let soma = 0;

    do {
        soma += i;
        i++;
    } while (i <= 100);

    alert("A soma de 1 a 100 é: " + soma);
}