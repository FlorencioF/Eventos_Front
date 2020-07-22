var tmpCabecalho = `<thead>
                        <tr>
                            <th width="10%" scope="col">Data</th>
                            <th width="30%"scope="col">Alarme</th>
                            <th width="30%"scope="col">Equipamento</th>
                            <th width="30%"scope="col">IP</th>
                            </tr>
                    </thead>
                    `
var tmpLinha =     `<tbody>
                        <tr>
                            <td>**DATA**</td>
                            <td>**ALARME**</td>
                            <td>**EQUIPAMENTO**</td>
                            <td>**IP**</td>
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

    fetch("http://localhost:8088/eventos/periodo", cabecalho)
        .then(res => res.json())
        .then(res => mostrarRelatorio(res));

}

function mostrarRelatorio(res){

    var tabela = "";

    for (i=0; i<res.length; i++){
        var evento = res[i];
        var strLinha = tmpLinha.replace("**DATA**", evento.data)
                                    .replace("**ALARME**", evento.alarme.nome)
                                    .replace("**EQUIPAMENTO**", evento.equipamento.hostname)
                                    .replace("**IP**", evento.equipamento.endIp);

        tabela = tabela + strLinha;
    }

    document.getElementById("relatorio").innerHTML = tmpCabecalho + tabela;
}

function voltar(){
    window.location = "home.html";
}