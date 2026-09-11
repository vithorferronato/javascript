//callback

/**
 * Se vc pedir uma operação que demora muito o node não precisa esperara parado 
 */

console.log("1");
console.log("2");
console.log("3");

//Sincronia

//==================================================================


console.log("Início");

setTimeout(() => {
    console.log("Processamento terminou");
}, 2000);

console.log("Fim")

//========================================================================
console.log("\n-------------------------------")
//Callback é uma função passa para outra função para ser executada posteriormente 

numeros = [1, 2, 3, 4, 5, 6, 7, 90];

numeros.forEach((n) => {
    console.log(n);
});
//isso é callback
/*
(n) => {
    console.log(n);
};*/

console.log("\n-------------------------------")
function processarUsuario(nome, callback) {
    console.log("Processando " + nome);
    callback();
}

processarUsuario('Vithin', () => {
    console.log("Usuário processado");
});

console.log("\n--------------------------------")
//=======================================

function buscarUsuario(callback) {
    //Simulação de tempo
    setTimeout(() => {
        const usuario = {
            //Construindo objeto 
            id: 1,
            nome: "Vithin"
        };
        callback(usuario);
    }, 2000);
};

console.log("Início da chamada");

buscarUsuario((usuario) => {
    console.log(usuario);
});

console.log("fim do processo");

//Problema do callback 
buscarUsuario => buscarPedido => buscarProduto => calcularTotal

console.log("\n------------------------")
//Promeses - é uma promessa de que teremos um resultado no futuro

//formator 
//((parametros ...) => {logica});

//Criando uma promise

