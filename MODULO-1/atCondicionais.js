//#region atividade1 
//#region atividade2
// Atividade 1 — Maioridade - Crei uma variável idade e atribua um 
// valor. Em seguida, use uma estrutura condicional para verificar 
// se a idade é maior ou igual a 18. Se for, exiba "Maior de idade",
// caso contrário, exiba "Menor de idade".
const idade = 20;
if (idade >=18){
 console.log("Maior de Idade");
}else{
 console.log("Menor de Idade");}

//Atividade 2 — Aprovação - Implemente com if/else e com switch case. 
// Crie uma variável nota e atribua um valor.
console.log("\n")
const nota = 5;
switch(true){
    case(nota >=7):
        console.log("Aprovado");
        break;
    case(nota <5):
        console.log("Reprovado");
        break;
    case(nota >=5 && nota <7):
        console.log("Recuperação");
}
console.log("\n")

if (nota < 5){
   console.log("Reprovado");
}

if(nota >=5 && nota < 7){
   console.log("Recuperação");
}

else if(nota >=7){
    console.log("Aprovado");}
//#endregion


//#region atividade3
//Atividade 3 — Login - Crie uma variável usuario e outra senha. 
//Em seguida, use uma estrutura condicional para verificar se o 
//usuário e a senha são válidos e pode ou não acessar o sistema.
console.log("\n")

const senha = 20;
const usuario = "vithin"
const ativo = true;

if(senha === 18 && usuario === "vithin" && ativo)
    console.log("Usuário autorizado");
else {console.log("Sai fora mané");}
//#endregion
//#region atividade4
//Atividade 4 — Status do pedido - Crie uma variável statusPedido e
// atribua um valor (pendente, pago, envidado, processando, entregue,
// concluído).
console.log("\n")
const statusPedido = "Enviado"
switch(statusPedido){
    case "pendente":
        console.log("pendente");
        break;
    case "pago":
        console.log("pago");
        break;
    case "processando":
        console.log("processando");
        break;
    case "entregue":
        console.log("entregue");
        break;
    case "Concluído":
        console.log("Concluído");
        break;
    case "Enviado":
        console.log("Enviado");
        break;
    default:
        console.log("Pedido não encontrado")}
//#endregion


//#region atividade5
//Atividade 5 — Contador - Crie uma algoritmo que com "for" para imprimir 
// todos os numeros pares de 1 a 100.
for(let i = 0; i <=100; i++){
    if(i%2 === 0){
     console.log(i);}
}
//#endregion
//#region atividades6
//atividade 6 - Refaça o exercicio 5 agora usando for...of e while.
console.log("\n")
const contador = [1,2,3,4,5,6,7,8,9,10];
for(const n_pares of contador){
    if((n_pares % 2) === 0){

        console.log(n_pares);
    }
}
//#endregion
    

//#region atividade7
//Atividade 7 — Crie um array com 10 nomes e exiba cada um dele usando for...of.
const nomes = ["Vithor","Pitanga","Murilin","Dias","Vinimito","Luso","Kako","Terassi","Miguel","Caio"]
for (const nome of nomes) {
    console.log(nome);
}
//#endregion
//#region atividade8
//Atividade 8 - Crie um array com 10 números e exiba somente os nomes que tem mais 
// de 5 letras usando for...of, if e .length. 
console.log("\n")
const nome = ["Vithor","Pitanga","Murilin","Dias","Vinimito","Luso","Kako","Terassi","Miguel","Caio"]
for (const nomes of nome) {
    if (nomes.length > 5) {
        console.log(nomes);
    }
}
//#endregion


//#region atividade9
//Atividade 9 — Somando valores
/*
    Dado o array de números, calcule a soma de todos os elementos do 
    array e exiba o resultado no console.
    Dica: você pode usar um loop for ou for...of para percorrer 
    o array e somar os valores.
    const numeros = [10, 20, 30, 40, 50];
*/
console.log("\n")
const numeros = [10,20,30,40,50];
let resultado = 0;
 
for (let i= 0; i < numeros.length; i++) {
    resultado += numeros[i];
}
    console.log(resultado)
//#endregion
//#region atividade10
//Atividade 10 — Desafio do backend 
const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];
//Dado o array acima, mostre somente os pedidos pagos
for(let i = 0; i < pedidos.length; i ++){
    
    //verificar se o pedido é "pago" é o true
    if(pedidos[i].pago === true){
    console.log(pedidos[i])}
}

//com for..of 
for(let pedido of pedidos){
   if(pedido.pago === true){
       console.log(pedido);
   }
}
//#endregion


