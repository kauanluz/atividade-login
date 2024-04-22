var usuario ={
    nome: "admin",
    senha: "admin"
}

function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    var recebe = {
        nome:nome,
        senha:senha,
    }

    if(recebe.nome == usuario.nome && recebe.senha == usuario.senha){
        alert("Sucesso");
        location.href = "outro.html";
    }else{
        alert("Usuario ou senha incorreto");
    }

}