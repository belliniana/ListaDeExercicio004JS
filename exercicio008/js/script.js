function executar() {
    let limite = parseInt(prompt("Exibir Fibonacci até qual número?"));

    let a = 0;
    let b = 1;
    let texto = a + " ";

    do {
        texto += b + " ";
        let temp = b;
        b = a + b;
        a = temp;
    } while (a <= limite);

    alert("Sequência de Fibonacci:\n" + texto);
}