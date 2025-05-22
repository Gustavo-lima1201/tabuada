let tabuada, contador, resultado, limite;
let saidaTabuada = "";
let continuar = true;

while (continuar) {
    // Entrada de dados
    tabuada = Number(prompt("Qual a tabuada você deseja resolver?"));
    limite = Number(prompt("Até qual número você quer que a tabuada vá?"));

    // Resetando a saída da tabuada
    saidaTabuada = "";

    // Gerando a tabuada
    for (contador = 0; contador <= limite; contador++) {
        resultado = tabuada * contador;
        if (contador === 0) {
            saidaTabuada = tabuada + " X " + contador + " = " + resultado;
        } else {
            saidaTabuada = saidaTabuada + "\n" + tabuada + " X " + contador + " = " + resultado; 
        }
    }

    // Mostrando a tabuada
    alert(saidaTabuada);

    // Perguntando se o usuário quer continuar
    continuar = confirm("Você quer continuar mostrando tabuadas?");
}

alert("Programa encerrado!");