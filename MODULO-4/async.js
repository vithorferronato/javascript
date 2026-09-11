//ASYNC

//No promisses temos
buscarUsuario().then(usuario => {
    console.log(usuario);
});

//async/await - Essa função vai funcionar de forma assincrona e vai ter um pedaço que vamos precisar esperar
//No async - await 
async function buscarUsuario(id) {
    try {
        //aqui é que eu quero que aconteça
        const usuario = await buscarUsuario();
        console.log(usuario);
    }
    catch (erro) {
        //erro que rolou
        console.log(erro);
    }

}