const fs = require("fs/promises");
const {buscarAtendimentos} = require("./atendimentos");
const {buscarServicos} = require("./servicos");

async function fecharConta(idTutor) {
    
    try{
        console.log("Buscando atendimento... ")
        const atendimentos = await buscarAtendimentos(idTutor);
        console.log(idTutor);
        console.log(atendimentos);

        let totalGeral = 0;


        for(const itens of atendimentos.itens){
            const servico = await buscarServicos(atendimentos.idTutor);
            const subTotal = servico.valor * itens.quantidade;

            totalGeral += subTotal;
            console.log(`${servico.procedimento} = ${itens.quantidade} x ${servico.valor} = R$ ${subTotal}`);
            
            console.log(subTotal)

        };
            console.log("O resultado final é R$: ",totalGeral)

    }
    catch(erro){
        console.log("Atendimento não encontrado", erro);
    }
};

fecharConta(2);

 