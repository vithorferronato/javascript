//#region start Operadores


//Exemplo de operadores de comparação
const x = 20;

console.log(x <= 18);
//#endregion

//#region Operadores matemáticos 
console.log("\n")
const a = 8;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); //Resto da divisão
//#endregion 

//#region Operadores de comparação
console.log("\n")
const a1 = 5;
const b2 = 10;

console.log(a1 < b2);
console.log(a1 >= b2);
console.log(a1 <= b2);
console.log(a1 == b2); //Comparação de valor
console.log(a1 === b2); //Comparação de valor e tipo
console.log(a1 !== b2);
//#endregion

//#region exercício
console.log("\n")
const idade1 = 20;
const idade2 = 25;
console.log(idade1 < idade2);
console.log(idade1 > idade2);
console.log(idade1 >= idade2);
console.log(idade1 <= idade2);
console.log(idade1 == idade2); //Comparação de valor
console.log(idade1 === idade2); //Comparação de valor e tipo
console.log(idade1 !== idade2);
//#endregion

//#region Operadores lógicos

console.log("\n")

const idade3 = 17;
const idade4 = 25;

//Operador lógico AND
console.log(idade3 > 18 && idade4 > 18); //Uma precisa se

//Operador lógico OR
console.log(idade3 > 18 || idade4 > 18); 

//Operador lógico NOT
console.log(!(idade3 > 18)); //Inverte o valor da expressão
//#endregion

//#region Combinado operadores
console.log("\n")

const idade5 = 25;
const matriculaAtiva = false;

const podeComprar = idade5 >= 18 || matriculaAtiva

console.log(podeComprar);
//#endregion

//#region Operadores de incremento e descremento
console.log("\n")
let numero = 10;
console.log(numero++); //10 // na primeira vez ele pega o número e depois coeça adicionar
console.log(numero); //11
console.log(++numero); //12

console.log(numero--); //12
console.log(numero); //11
console.log(--numero); //10
//#endregion

//#region Exercício1 - Comparação
//Faça comparação a partir da variável informada
console.log("\n")
const v = 5;
const g = 10;
const resultado = v < g;
console.log(v < g);
console.log(v > g);
console.log(v >= g);
console.log(v <= g);
console.log(v == g); 
console.log(v === g); 
console.log(v !== g);
//#endregion

//#region Exercício2 - == vs ===
//Verifique os resultados das comparações a seguir 
console.log("\n")
console.log(10 == "10");

console.log(10 === "10");

console.log(true == 1);

console.log(true === 1);

console.log(null == undefined);

console.log(null === undefined);
//#endregion

//#region Exercício3 - Sistema de acesso - Desafio
console.log("\n")
const dataNascimento = new Date("2025-05-15");
const ativo = true;

//Transformando 18 anos em milisegundos 
const dezoitoAnosEmMilisegundos = 18 * 365.25 * 24 * 60 * 60 * 1000;

//comparando milisegundos com milisegundos!
const podeAcessar = (new Date() - dataNascimento) >= dezoitoAnosEmMilisegundos && ativo;

console.log(podeAcessar)
//#endregion

//#region2 Usando funções extras




























