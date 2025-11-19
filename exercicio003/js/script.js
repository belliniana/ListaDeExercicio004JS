function executar() {
    let i = 1;
    let resultado = "";

    do {
        if (i % 2 === 0) {
            resultado += i + " ";
        }
        i++;
    } while (i <= 50);

    alert("Números pares de 1 a 50:\n" + resultado);
}