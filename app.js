alert('Boas vindas ao jogo do número secreto!');

let numeroSecreto = 43;
let chute;
let tentativas = 1;


while(chute != numeroSecreto || tentativas < 2 ){

    chute = prompt('Escolha um número de 1 a 100:');

    if (chute == numeroSecreto) {
        console.log(`Parabéns, você acertou! ${numeroSecreto}`);
    } else{
        if(chute>numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que $ama{chute}`);
        }
        tentativas++;
        console.log(`Tentativa ${tentativas}`);
    }
    
} 