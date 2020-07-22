var templateFoto = `<img src="**FOTO**" width="100%">`;
var templateInfo = `<strong>Nome:</strong> **NOME** <br>
                    <strong>RACF:</strong> **RACF** <br>
                    <strong>EMAIL:</strong> **EMAIL** <br>
                    <strong>DEPARTAMENTO:</strong> <a href="departamento.html?id=**ID**">**DEPTO**</a> <br>
                    <strong>UNIDADE:</strong> **UNIDADE**
                   `;

function preencherInfo(){
    var user = localStorage.getItem("EvtUser");
    if (!user){
        window.location("index.html");
    }
    else{
        var objUser = JSON.parse(user);  // aqui vou converter a STRING armazenada para um objeto
        var strFoto = templateFoto.replace("**FOTO**", objUser.linkFoto);
        document.getElementById("fotoUser").innerHTML = strFoto;

        var strInfo = templateInfo.replace("**NOME**", objUser.nome)
                                  .replace("**RACF**", objUser.racf)
                                  .replace("**EMAIL**", objUser.email)
                                  .replace("**DEPTO**", objUser.departamento.nome)
                                  .replace("**UNIDADE**", objUser.departamento.unidade)
                                  .replace("**ID**",objUser.departamento.id);
        document.getElementById("infoUser").innerHTML = strInfo;
        console.log(strInfo);
    }
}

function logout(){
    localStorage.removeItem("EvtUser");
    window.location = "index.html";
}