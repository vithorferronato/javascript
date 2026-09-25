//Construiu objeto com usuários
const usuarios = [{
    id: 1,
    nome: "Vithin",
    whats: "19998901432",
    email: "vithin@gmail.com",
    cep: "13560070" 
},
{
    id: 2,
    nome: "Catarine",
    whats: "19997801432",
    email: "catarine@gmail.com",
    cep: "13568970"    
},
{
     id: 2,
    nome: "Guilherme",
    whats: "19997801467",
    email: "gui@gmail.com",
    cep: "13568324"    
}
];

//Função buscarUsuario
async function buscarUsuario(id) {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            const usuario = usuarios.find(usuario => usuario.id === id);

            if(usuario){
                resolve(usuario);
            }
            else{
                reject("Usuario não encontrado");
            }
        }, 1000)
    })
}

//transformando em modulo
module.exports = {
    buscarUsuario
};