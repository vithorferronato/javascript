console.log("\n")
//Atividade 1 — Saudação
//Crie uma função chamada saudacao que receba um nome e retorne uma mensagem.
//Resultado esperado : Olá, Maria!

function saudacao(){
    console.log("Olá Vihtin")
}
saudacao();

//----------------------------------------------------------------------
console.log("\n")
//Atividade 2 — Calculadora
//Crie quatro funções para cada uma das operações +, -, *, /
//Cada função deve receber dois números e retornar o resultado.

function soma(nunero1, numero2){
    return nunero1 + numero2;
}
console.log("Tradicional",soma(999, 1));

function subtracao(nunero1, numero2){
    return nunero1 - numero2;
}
console.log("Tradicional",subtracao(999, 1));

function multiplicacao(nunero1, numero2){
    return nunero1 * numero2;
}
console.log("Tradicional",multiplicacao(999, 1));

function divisao(nunero1, numero2){
    return nunero1 / numero2;
}
console.log("Tradicional",divisao(999, 1));

//----------------------------------------------------------------------
console.log("\n")
//Atividade 3 — Verificação de idade
//Crie uma função que receba uma idade e retorne: Menor de idade ou Maior de idade

function idadeUsuario(idade){
    if (idade >=18){
    console.log("Você é maior de idade!");
}else{
    (idade <18)
    console.log("você é maior de idade!")
}
}
idadeUsuario(18);
idadeUsuario(11);
idadeUsuario(9);
//----------------------------------------------------------------------
console.log("\n")
//Atividade 4 — Arrow Function


function calcularDobroTra(numero) {
    
    return numero * 2;
}

const calcularDobro = (numero,) => {
    return numero * 2;
}

console.log("Tradicional", calcularDobroTra(8, ));
console.log("Tradicional", calcularDobro(8, ));
console.log("\n")
console.log("Fiz com ajuda do Bruno, essa segunda opção")
function dobrode2(numA, numB){
    const dobroA = numA*2;
    const dobroB = numB*2;
    
    //devolve os 2 dobros
    return {dobroA,dobroB}
    // return [dobroA,dobroB]
}

const dobros = dobrode2(2,4)
console.log(dobros);