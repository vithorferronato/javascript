const servicos = [{
    id: 1,
    valor: "R$ 150,00",
    procedimento: "Castração"
},
{
    id: 2,
    valor: "R$ 50,00",
    procedimento: "Vacinação"
},
{
    id: 3,
    valor: "R$ 30,00",
    procedimento: "Exames"
}
];
async function buscarServicos(id) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const servico = servicos.find((servico) => servico.id === id);
            if(servicos){
                resolve(servico);
            }
            else{
                reject("Não existe nenhum serviço")
            }
        }, 2000);
    })
    
}

module.exports ={
    buscarServicos
}