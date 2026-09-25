//Criar Arquivo 
const fs = require("fs/promises");

async function criarArquivo() {
    const livros = [
        {
            id: 1,
            titulo: "João e o Pé de Feijão",
            autor: "Joseph Jacobs"
        },
        {
            id: 2,
            titulo: "Harry Potter",
            autor: "J.K. Rowling"
        }
    ];


    //Criar o arquivo
    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

    console.log("Arquivo criado com sucesso!");
}

//Listar Livros 
async function listarLivros() {
    //ler arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

    //transformar para objeto
    const livros = JSON.parse(dados); /*tranformar alguma coisa*/

    //exibir no console (no futuro será seu site)
    console.log(livros);
}

//Adicionar Livros
async function adicionarLivros() {
    //ler o arquivo 
    const dados = await fs.readFile("livros.json", "utf-8");
    
    //transformar JSON (parse)
    const livros = JSON.parse(dados);

    //add o livro (push)
    livros.push({
        id: 3,
        titulo: "Jogos Vorazes",
        autor: "Suzanne Collins"
    });

    //retransformar no objeto -->  json
    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

    //"Livro adicionado com sucesso!"
    console.log("Livro adicionado com sucesso!")

}

//Alterar Livros

async function alterarLivros(id) {
    //precisamos saber o livro 

    //ler o arquivo 
    const dados = await fs.readFile("livros.json", "utf-8");

    //transfromar o arquivo JSON --> objeto
    const livros = JSON.parse(dados);

    //descobrir o livro 
    const livro = livros.find((livro) => livro.id === id);
        //logica - se não existir 
        //! => é com negação, como um false
        if(!livro){
            console.log("Livro não encontrado!");
            return;
        }

    //alterar o livro 
    livro.autor = "Vithin"

    //retransformar objeto --> objeto
    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

    //falar que deu certo
    console.log("Aqui está o seu novo livro!")
}
//Deletar Livros
async function deletarLivro(id) {
     //ler arquivo
        const dados = await fs.readFile("livros.json", "utf-8");

     //transformar o arquivo
        const livros = JSON.parse(dados);

    //logica não - msg
       if(!livros){
            console.log("Lista de livros não encontrada!");
            return;
        }

     //procurar o livro a ser deletado -- deleta os dados do livro
        const livrosAtualizados = livros.filter((livros) => livros.id !== id);
        if(livrosAtualizados.length === livros.length){
            console.log("Livro", id, "não encontrado!");
            return;
        }

     //deleta os dados do livro

     //retransformar 
         await fs.writeFile("livros.json", JSON.stringify(livrosAtualizados, null, 2));

     //msg  
     console.log("Livro deletado com sucesso!");
}

//Função executar
async function executar() {
    
    await criarArquivo();
    
    await listarLivros();

    await adicionarLivros();

    await alterarLivros(2);

    await deletarLivro(2);
}
//Chamando o inicio (endpoint)
executar();
