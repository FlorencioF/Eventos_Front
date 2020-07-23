var tmpCabecalho = `<thead>
                        <tr>
                            <th width="80%" scope="col">Alarme</th>
                            <th width="20%"scope="col">Quantidade</th>
                            </tr>
                    </thead>
                    `
var tmpLinha =     `<tbody>
                        <tr>
                            <td>**ALARME**</td>
                            <td>**QUANTIDADE**</td>
                        </tr>
                    </tbody>
                    `


function gerarRelatorio(){
    var dataInicio = document.getElementById("dateInicio").value;
    var dataFim = document.getElementById("dateFim").value;
    console.log(dataInicio);

    var msgBody = {
        inicio : dataInicio,
        fim : dataFim
    }

    var cabecalho = {
        method : 'POST',
        body : JSON.stringify(msgBody),
        headers: {
            'Content-type':'application/json'
        }
    }

    fetch("http://localhost:8088/eventos/alarmes", cabecalho)
        .then(res => res.json())
        .then(res => mostrarRelatorio(res));

}

function mostrarRelatorio(res){


    var tabela = "";

    for (i=0; i<res.length; i++){
        var evento = res[i];
        var strLinha = tmpLinha.replace("**ALARME**", evento.nomeAlarme)
                                    .replace("**QUANTIDADE**", evento.qtde);

        tabela = tabela + strLinha;
    }

    document.getElementById("relatorio").innerHTML = tmpCabecalho + tabela;
}

function voltar(){
    window.location = "home.html";
}