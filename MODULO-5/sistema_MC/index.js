//exports e imports 
const fs = require("fs/promises");
const {buscarUsuario} = require("./ususario");
const {buscarProdutos} = require("./produtos");
const {buscarPedidos} = require("./pedidos");
//função 
async function fecharConta(usuarioId) {
    try{
        //usuario
        console.log("Buscando Usuario...")
        const usuario = await buscarUsuario(usuarioId);
        console.log(usuarioId);
        console.log(usuario);

        //produto
        console.log("Buscando Pedidos...")
       

        const pedidos = await buscarPedidos(usuarioId)

        //pedido
        //Total geral
        let totalGeral = 0;

        //array para os itens
        const itensConta = [];

        //varrer os pedidos para ver os pedidos dos clientes
        //varrer os itens(produtos) e add(push) os itens no itens conta
        //estrutura da comanda 
        for(const pedido of pedidos){
            const produto = await buscarProdutos(pedido.produtoId);
            const subTotal = produto.preco * pedido.quantidade;

            itensConta.push({
                item: produto.nome,
                quantidade: produto.quantidade,
                precoUnitario: produto.preco,
                subTotal: subTotal
            });

            totalGeral += subTotal;
        }

        //Construir nosso arquivo     
        const comanda = {
            estabelecimento: "Five",
            cliente: {
                id: usuario.id,
                nome: usuario.nome
            },
            itens: itensConta,
            totalPagar: totalGeral
        }
        
        await fs.writeFile("comandaCliente.json", JSON.stringify(comanda, null, 2), "utf-8");
    }
    catch(erro){
        console.error("Erro ao fechar a conta", erro);
    }
}

fecharConta(1);
