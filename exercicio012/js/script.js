function executar() {
    let i = 1;
    let texto = "";

    do {
        if (i % 2 !== 0) {
            texto += i + " ";
        }
        i++;
    } while (i <= 50);

    alert("Números ímpares de 1 a 50:\n" + texto);
}