function QuandoClicarNoBotão(){
    console.log("Obrigado por comprar em nossa loja");
}
//invocação da função 
QuandoClicarNoBotão();

function exibirMensagem(){
    console.log("Bebam água");
}
exibirMensagem();

//Mais simples de tudo (parametros)
//-----------------------------------

/*function somar(){
    const resultado = 8 + 3;
    console.log(resultado);
}
somar();*/
//--------Reutilizavel

function somar(numero1, numero2){
    return(numero1 + numero2);

}   

const resultado = somar(8, 3);

if (resultado >=11){
    console.log("O Senai é pika");
}
else{
    console.log("ainda é pika")
}
/*
  console.log() é como mostrar o resultado em uma tela.

  rerturn é como entregar o resultado para outra parte dp programa utilizar.
*/

//declarar as constantes
const valor = 400;
const desconto = 20;
//Constante com cálculo de valorFinal 
function calcularDesconto(valor, desconto){
    return valor - desconto

//chamas das funções
calcularImposto(valorFinal);
cashBack(valorFinal);
parcelamento(valorFinal);

//funções
function calcularDesconto(valor, desconto){
}


//Imposto sobre produto
function calcularDesconto(valorFinal){
    const valorImposto = valorFinal * 0.04;
    console.log("Valor tributário: " + valorImposto);
}
}
//Regra CashBack 
function cashBack(valorFinal){
    if(valorFinal > 50){
    const cashBack = valorFinal * 0.10;
    console.log("Valor do Cashback: " + cashBack);
}
}
function parcelamento(valorFinal){
if (valorFinal > 399){
    const valorParcelado = valorFinal/6;
    console.log("Valor das parcelas 6x sewm juros: R$ " + valorParcelado);
} else if (valorFinal >= 100 && valorFinal <=399) {
    //Compras entre 100 e 399: com 2% de juros no total
    const valorParcelado = (valorFinal * 1.02) / 6;
    console.log("Valor das parcelas 6x com juros: R$ " + valorParcelado)
} else if(valorFinal<100){
    //compras abaixo de 100: não parcela
    console.log("o valor não atinge o mínimo de R$ 100 para parcelamento.")

}
}
parcelamento(valorFinal);
