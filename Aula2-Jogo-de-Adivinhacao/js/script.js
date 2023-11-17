let numeroSecreto = parseInt(Math.random() * 1001);
let numeroDigitado;

while(numeroDigitado != numeroSecreto){
    // pedir valor ao usuário enquanto os números forem diferentes
    numeroDigitado = prompt('Digite seu chute entre 1 e 1000');

    // estrutura de repetição para comparar se o número digitado é igual ao número secreto
    if(numeroDigitado == numeroSecreto){
        alert('Acertou')
    }
    else if(numeroDigitado < numeroSecreto){
        alert('Errou! O número secreto é maior')
    }
    else{
        alert('Errou! O número secreto é menor')
    }
}