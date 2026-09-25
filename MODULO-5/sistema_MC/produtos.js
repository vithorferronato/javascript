//Construir meu array de produtos 
const produtos = [{
    id: 1,
    nome: "Five American",
    preco: 39
},
{
    id: 2,
    nome: "Five Pool",
    preco: 46
},
{
    id: 3,
    nome: "Five BBQ",
    preco: 36
},
{
    id: 4,
    nome: "Coca-Cola",
    preco: 6
}
]

//função buscarProdutos
async function buscarProdutos(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            const produto = produtos.find((produto) => produto.id === id);

            if(produto){
                resolve(produto);
            }
            else{
                reject("Produto não encontrado");
            }
        }, 1000);
    });
}
module.exports = {
    buscarProdutos
};

//moduleparsa exportar 