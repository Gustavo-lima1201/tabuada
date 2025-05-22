//escopo global
 
function Tabuada(tabuadaUsuario) {
    //escopo específico
    let contador = 0, resultado, saidaTabuada;
 
    while (contador <= 10) {    
        //Atribuindo valor a variavel resultado
        resultado = tabuadaUsuario * contador;
        if (contador === 0) {
            saidaTabuada = tabuadaUsuario + " X " + contador + " = " + resultado;
        }else {
            saidaTabuada = `${saidaTabuada} \n ${tabuadaUsuario} X ${contador} = ${resultado}`; //Template String      
        }
        contador = contador + 1; //contador++;   
    }
        return saidaTabuada;     
    }    


function Tabuadacomlimite(limitetabuada, tabuadaUsuario){

    let contador = 0, resultado, saidaTabuada;

    while (contador <= limitetabuada) {
        resultado = tabuadaUsuario * contador;
        if (contador === 0) {
            saidaTabuada = tabuadaUsuario + " X " + contador + " = " + resultado;
        } else {
            saidaTabuada = `${saidaTabuada} \n ${tabuadaUsuario} X ${contador} = ${resultado}`;       
        }
        contador = contador + 1; //contador++;
    }
    return saidaTabuada; 

    
    }

 
 
function main() {
    //Declarando Variaveis
    let tabuada, limitetabuada;
 
    //Entrada de dados
    //Atribuindo valor a variavel (tabuada)
    tabuada = Number(prompt("Qual a tabuada você deseja resolver?"));
     limitetabuada = Number(prompt("Até qual número você quer que a tabuada vá?"));
    // REPETIÇÃO COM WHILE
    //Enquanto contador for menor ou igual a 10 for verdade repetir se não falso
    // console.log(Tabuada(tabuada));
    // alert(Tabuada(tabuada));
    console.log(Tabuadacomlimite(limitetabuada,tabuada));
    alert(Tabuadacomlimite(limitetabuada, tabuada));            
}
 
// pegar os dados
// faz tabuada
// exibe a saída  
 
 
main();