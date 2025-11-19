function executar() {
    let i = 1;
    let resultado = "";

    do {
        resultado += i + " ";
        i++;
    } while (i <= 10);

    alert("Números de 1 a 10:\n" + resultado);
}