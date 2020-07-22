function clickBtnEnviar(){

    var txtEmail = document.getElementById("txtEmail").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("Email: " + txtEmail + "\nSenha: " + txtSenha);

    var msgBody = {
        email : txtEmail,
        senha : txtSenha

    }

    var cabecalho = {
        method : 'POST',
        body : JSON.stringify(msgBody),
        headers: {
            'Content-type':'application/json'
        }
    }

    fetch("http://localhost:8088/login", cabecalho).then(res => logar(res));

}


function logar(objeto){


    if (objeto.status === 200){
        objeto.json().then(usuario => localStorage.setItem("EvtUser", JSON.stringify(usuario)));
        window.location = "home.html";
    }
    else if(objeto.status === 401){
        document.getElementById("msgResposta").innerHTML = "Senha Inválida";

    }

    else if (objeto.status === 404){
        document.getElementById("msgResposta").innerHTML = "Usuário Inexistente";
    }
}

function verificaTecla(event){

    if (event === 13){
        clickBtnEnviar();
    }
}