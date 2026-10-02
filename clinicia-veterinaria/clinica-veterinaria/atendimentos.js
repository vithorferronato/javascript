// Atendimentos nome do paciente/tutor e a lista de procedimentos realizados;

const atendimentos = [{
    idTutor: 1,
    tutor: "vithor",
    especie: "gato",
    itens: [
    {idServiço: 1, quantidade: 1},
    {idServiço: 2, quantidade: 2},
    {idServiço: 3, quantidade: 3}
    ]
},
{
    idTutor: 2,
    tutor: "Rafael",
    especie: "Cavalo",
    itens: [
    {idServiço: 1, quantidade: 1},
    {idServiço: 2, quantidade: 2},
    {idServiço: 3, quantidade: 3}
    ]
},
{
    idTutor: 3,
    tutor: "Lucas",
    especie: "Cavalo",
    itens: [
    {idServiço: 1, quantidade: 1},
    {idServiço: 2, quantidade: 2},
    {idServiço: 3, quantidade: 3}
    ]
}];

async function buscarAtendimentos(idTutor) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const atendimento = atendimentos.find((atendimento) => atendimento.idTutor === idTutor);
            if(atendimento){
                resolve(atendimento);
            }
            else{
                reject("Não existe nenhum atendimento")
            }
        }, 2000);
    })
    
}

module.exports ={
    buscarAtendimentos
}