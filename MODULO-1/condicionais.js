//#region Teste de Idade 
console.log("\n")
const idade1 = 20;

console.log(idade1 >= 18);

//agora podemos tomar decisões com essa resposta 
const idade2 = 20;

if(idade2 >= 18){
    console.log("Maior de idade");
}
//#endregion 

//#region if e else

const idade3 = 16;

// em js usamos as chaves para delimitar um bloco de código 
if (idade3 >= 18){
    console.log("Maior de idade");
}else{ 
    console.log("Menor de idade");
}

//-------
//Nota com casa decimal muito grande
console.log("\n")
const nota = 6.99999999999999999;
//transformação para notaArredondada
//const notaCortada = notaTexto.substring(0, notaTexto.indexOf(".") + 3);
//const notaFinal = Number(notaCortada); 
//const notaArredondada = Number(nota.toFixed(2));
const notaArredondada = Math.floor(nota*100)/100;
console.log(notaArredondada);

if (notaArredondada < 5){
   console.log("Reprovado");
}

if(notaArredondada >=5 && notaArredondada < 7){
   console.log("Recuperação");
}

else if(notaArredondada >=7){
    console.log("Aprovado");
}
//aprovado, reprovado, recuperação
//#endregion

//#region email
console.log("\n")
const senha = 20;
const email = "ddddd@gmail.com"
const ativo = true;

if(senha === 18 && email === "ddddd@gmail.com" && ativo){
    console.log("Usuário autorizado");
}
else{
    console.log("Sai fora do nosso site");
}
//#endregion

//#region switch case
console.log("\n")
const dia = 3

switch(dia){
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda-Feira");
        break;
    case 3:
        console.log("Terça-Feira");
        break 
    case 4:
        console.log("Quarta-Feira");
        break 
    case 5:
        console.log("Quinta-Feira");
        break 
    case 6:
        console.log("Sexta-Feira");
        break 
    case 7:
        console.log("Sábado");
        break 
    default:
        console.log("Dia não encontrado");
}
/*Quando usar o switch case?
 -Quando temos muitas condições para verificar.
 -Quando temos uma variável que pode ter muitos valores diferentes.
 -Quando queremos deixar o código mais legível.

Quando usar if/else?
   -Quando temos poucas condições para verificar.
*/
//#endregion

//#region operador ternario
console.log("\n")
const idade = 20;
const mensagem = idade >=18 ? "Maior" : "Menor";
console.log(mensagem)
//constante = condição ? valo se true : valor se
//#endregion

//#region laços

//while; for 

//while - enquanto for verdade

let contador = 1;

while(contador <=6){
    console.log(contador);

    contador++;
}
//#endregion

//*region frutas
for(let i =1; i<=5; i++){
    console.log(i);}

const frutas = ["Morango", "Banana","Maçã","Ameixa","Uva"];

for(const fruta of frutas) {
    console.log(fruta);
}
//tradicional
for(let i=0; i < frutas.length; i++){
    console.log(frutas[i]);
}
