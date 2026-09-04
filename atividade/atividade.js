//#region -  Manipulação básica

const frutas = ["Maçã", "Banana", "Laranja", "Pera", "Limão", "Mexiriaca"];

/*
    Adicione "Morango" no final.
    Adicione "Abacaxi" no início.
    Remova o último elemento.
    Remova o primeiro elemento.
    Mostre a quantidade de frutas.
*/
frutas.push("morango");
console.log(frutas);

frutas.unshift("abacaxi");
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.shift();
console.log(frutas);

console.log(frutas.length);



//#endregion
console.log("\n--------------------------------")

//#region - forEach

const nomes = [
    "Ana",
    "Carlos",
    "João",
    "Maria", 
    "Claudia", 
    "Adriana",
    "Cesar",
    "Asafe"
];
//Utilize forEach para mostrar: Olá, Ana! .... .assim por diante 
nomes.forEach((nomes) => {
   console.log("Olá, Ana", nomes,"!");

});
//#endregion
console.log("\n--------------------------------")

//#region map

const precos = [10, 20, 30, 40, 50, 60, 70, 80];

//Crie um novo array com os preços acrescidos de 10%.
const preco = [];
const novosPrecos = [];
console.log("\n--------------------------------")


for (let preco of precos) {
  novosPrecos.push(preco + preco * 1.1);
  console.log(novosPrecos);
}

//#endregion
console.log("\n--------------------------------")
//#region filter
const numeros = [5, 12, 18, 25, 30, 7, 40];


//Crie um novo array somente com números maiores que 20.

const numero = numeros.filter((numero) => {
    return numero > 20;

});
console.log(numero);
//#endregion


//#region find
const listaNumeros = [5, 12, 18, 25, 30];

//Encontre o primeiro número maior que 20.
const primeiroNumero = listaNumeros.find(num => num >20);
console.log(primeiroNumero);
//#endregion
console.log("\n--------------------------------")

//#region some
const idades = [12, 15, 17, 20, 14];


//Existe alguém maior de idade? Utilize o some para encontrar! 

const maiorIdade = idades.some(n => n > 18);
console.log(maiorIdade);
//every

//Usando o array acimima codifique respondendo: Todos são maiores de idade?
const maioresIdade = idades.every(n => n >=18);
console.log(maioresIdade);

//#endregion
console.log("\n--------------------------------")

//#region reduce