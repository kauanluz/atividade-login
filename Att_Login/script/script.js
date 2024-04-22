var usuario ={
    nome: "admin",
    senha: "123"
}
function logar(){
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    var recebe = {
        nome:nome,
        senha:senha
    }

    if(recebe.nome == usuario.nome && recebe.senha == usuario.senha){
        alert("Sucesso");
        location.replace("./outro.html");
    }else{
        alert("Usuario ou senha incorreto");
    }

}