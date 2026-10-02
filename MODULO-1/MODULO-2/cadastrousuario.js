//cadastro de usuário 

function cadastroUsuario(id, nome, senha, cpf, email){
    return {
        id, 
        nome,
        senha,
        cpf,
        email
    };
}

const usuario = cadastroUsuario(1, "Vithin", 1234, 1234567891011, "xv@gmail.com" )
//console.log(usuario);

//Com objetivo eu agora consigo melhorar a que é exibido.

console.log("Fala "+ usuario.nome + " Seu cadastro foi realizado com sucesso!")