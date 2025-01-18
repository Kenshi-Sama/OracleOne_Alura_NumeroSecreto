//Boas vindas
alert('Bem vindo ao jogo do número secreto!');

//declarando a dificuldade do jogo.

let qtdNumeros = prompt('Escolha a dificuldade do jogo apenas declarando a quantidade de números. Intervalo de 10 números ou intervalo de 100 números?')

let dificuldade = qtdNumeros == 10 ? 10 : 100;

//Definindo número secreto de 1 a 100, utilizando a função Math, que inicialmente traz numeros pseudo aleatórios  entre 0 e 0,9.
let numeroSecreto = parseInt(Math.random()*dificuldade)+1;
console.log(numeroSecreto);

//criando uma variável vazia para atribuir o valor posteriormente.
let chute;

//criando um contador de tentativas.
let qtdTentativas = 1;

/*estrutura de repetição, que deve fazer com que o jogo continue até o usuário
acertar o número secreto.*/
while(chute!=numeroSecreto){

    //Capturando a escolha do usuário.
    chute = prompt(`Escolha um número de 1 a ${dificuldade}:`);

    //Estrutura condicional do acerto, e dicas sobre o número secreto.
    if(chute == numeroSecreto){
        alert(`Você acertou o numero secreto: ${numeroSecreto}.`)
        //caso o chute seja igual ao número secreto, o break para o while.
        break;

    }else{
        if(chute>numeroSecreto){
            alert(`O número secreto é menor que ${chute}.`)
        }else{
            alert(`O número secreto é maior que ${chute}`)
        }
    }

    //incrementando o contador de tentativas.
    qtdTentativas++;
}

/*Utilizando operador ternário para corrigir a palavra de acordo com a qtd de tentativas.*/    
let palavraTentativa = qtdTentativas>1?'tentativas':'tentativa';

//exibindo mensagem final corretamente.
alert(`Parabéns, você acertou o número secreto com ${qtdTentativas} ${palavraTentativa}.`)
