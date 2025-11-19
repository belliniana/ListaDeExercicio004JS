function executar() {
    let a = 0;
    let b = 1;
    let texto = "";
    let contador = 1;

    do {
        texto += a + " ";
        let temp = a;
        a = b;
        b = temp + b;
        contador++;
    } while (contador <= 20);

    alert("Primeiros 20 números de Fibonacci:\n" + texto);
}