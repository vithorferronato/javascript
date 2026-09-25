const servicos = [{
    id: 1,
    valor: 150,
    procedimento: "Castração"
},
{
    id: 2,
    valor:  50,
    procedimento: "Vacinação"
},
{
    id: 3,
    valor:  30,
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