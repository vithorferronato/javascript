/*
um objeto representa uma "coisa" do mundo real através de propriedades e comportamentos.

  const nome = [] array
  const nome = {} objeto
  const arrayDeobjeto [{},{},{}]---Mais comum
  const objetoDeobjeto{{},{},{}}<--- Pode rolar também
*/
//#region 
//Construir um objeto

const aluno = {
    id: 1,
    nome: "Vithin",
    idade: 17,
    curso: "Ensino Médio Integrado",
    RM: 87654,
    cadastroAtivo: true,
    email: null,
    hobbi: ["treinar", "beber", "se divertir"],

    endereco: {
        rua: "Rua 35, 405",
        bairro: "Jardim Itália",
        cidade: "Santa Rita do Passa-Quatro",
        estado: "São Paulo",
        pais: "Brasil",
        cep: 13670000
    }
};
console.log(aluno);

