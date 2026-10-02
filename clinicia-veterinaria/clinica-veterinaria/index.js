const fs = require("fs/promises");
const {buscarAtendimentos} = require("./atendimentos");
const {buscarServicos} = require("./servicos");

async function fecharConta(idTutor) {
    
    try{
        console.log("Buscando atendimento... ")
        const atendimentos = await buscarAtendimentos(idTutor);
        console.log(idTutor);
        console.log(atendimentos);


        
        console.log("Buscando Serviços...");
        const servicos = await buscarServicos(idTutor);
        console.log(servicos);

        let totalGeral = 0;

        const itensAtendimentos = [];

        for(const servicos of atendimentos){
            const servico = await buscarServicos(atendimentos.idTutor);
            const subTotal = servicos.preco * atendimentos.quantidade;

            itensConta.push({
                item: servico.nome,
                quantidade: atendimentos.quantidade,
                precoUnitario: servicos.preco,
                subTotal: subTotal
            });

            totalGeral += subTotal;
        }
        const comanda = {
            lugar: "Clinica Veterinaria",
            cliente: {
                id: atendimentos.idTutor,
                tutor: atendimentos.tutor,
                especie: atendimentos.especie
            },
            itens: itensAtendimentos,
            pagamentoFinal: total
        }
          await fs.writeFile("comanda.json", JSON.stringify(comanda, null, 2), "utf-8");
    }
    catch(erro){
        console.log("Atendimento não encontrado", erro);
    }
};

fecharConta(2);

 