//Simulação 

//função auxiliar
const esperar = (ms) => new Promise(
    resolve => setTimeout(
        resolve, ms
    )
);

// Função buscar usuário 
async function buscarUsuario(Id) {
    await esperar(2000);

    return {
        id: Id, //o id que a gente manda na exerc
        nome: "Vithin",
        email: "vithin@gmail.com"
    }
}

//Função buscar Pedidos
async function buscarPedido(usuarioid) {
    await esperar(3000);

    const todosPedidos = [
       {id: 1, produto: "X-tudo"},
       {id: 2, produto: "Coca-Cola"},
       {id: 3, produto: "X-Bacon"}
    ];
    return todosPedidos.filter(pedido => pedido.id === usuarioid);
}

//Função Executar
async function executarPedido() {
    try{
        console.log("Iniciando simulação")
        console.log("Buscando usuário...")
        const usuario = await buscarUsuario(1);
        console.log("Usuario encontrado: ", usuario);
        //buscar pedido
        console.log("Buscando pedido pelo Id: ", usuario.id)
        const pedido = await buscarPedido(usuario.id);
        console.log("Pedido encontrado: ", pedido);
    }
    catch(erro){
        console.log("Deu errado");
    }
}
executarPedido();
