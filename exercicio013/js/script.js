function executar() {
    let numero = prompt("Digite um número inteiro:");
    
    let i = 0;
    let texto = "";

    do {
        texto += numero[i] + " ";
        i++;
    } while (i < numero.length);

    alert("Dígitos separados:\n" + texto);
}