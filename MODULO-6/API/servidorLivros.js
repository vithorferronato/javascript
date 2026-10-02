//import
import http from "http";

//lógica do servidor
const servidor = http.createServer((req,res) => {
    //headers
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    //lógica body de rotas
    if(req.url === "/"){
        res.end("Pagina Inicial");
    }
    else if(req.url === "/livros"){
        //vou no banco faça um select
        //trasformo em json
        //devolve para o front 
        res.end("Pagina de livros");
    } else if(req.url === "/usuarios"){

         res.end("Pagina de Usuários"); 
    } else{

        res.end(" erro 404: Página não encontrada");
    }
});

servidor.listen(3000, () => {
    console.log("Servidor rodado na porta 3000")
});