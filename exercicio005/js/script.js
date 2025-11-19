function executar() {
    let n = parseInt(prompt("Digite um número para exibir a tabuada:"));
    let i = 1;
    let resultado = "";

    do {
        resultado += `${n} x ${i} = ${n * i}\n`;
        i++;
    } while (i <= 10);

    alert(resultado);
}