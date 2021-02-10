const btn = document.querySelector('#botao-pesquisar');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target.textContent);
    const form = document.querySelector('#nro-processo');
    // console.log(form);

    let nroProcesso = form.value;
    // console.log(nroProcesso);
    let processoURI = "https://api-denoakmongo.herokuapp.com/api/"+nroProcesso
    // console.log(processoURI);

    const xhr = new XMLHttpRequest();

    xhr.open("GET", processoURI);
    
    // setTimeout(function(){ console.log("Passou do GET"); }, 2000);

    xhr.addEventListener('load', function () {
        
        var erroAjax = document.querySelector("#id-erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;

            //var resposta = {
            //    "_id": {
            //      "$oid": "5ee16300afd12a2f64ee639f"
            //    },
            //    "processo": "0003664-35.2020.8.26.0100",
            //    "decisao": "Processo 0003664-35.2020.8.26.0100 (apensado ao processo 1120126-29.2018.8.26.0100) (processo principal 1120126- 29.2018.8.26.0100) - Cumprimento de sentença - Arrendamento Mercantil - Robersom Costa de Deus - Cia Itauleasing de Arrendamento Mercantil - Vistos. Remeta-se os autos à Contadoria para apuração de excesso de execução nos termos da sentença/acórdão. Com os cálculos, abra-se vistas às partes. Intime-se. - ADV: ISABEL APARECIDA SILVA DO COUTO (OAB 224217/SP), CARLA CRISTINA LOPES SCORTECCI (OAB 248970/SP), EGBERTO HERNANDES BLANCO (OAB 89457/SP), RAFAEL AUGUSTO DO COUTO (OAB 320725/SP)"
            //  }

            var publicacoes = JSON.parse(resposta);
            //console.log(publicacoes)
            //console.log(nroProcesso)
            //console.log(publicacoes.processo)
            //console.log(publicacoes.decisao)

            adicionaPublicacao(publicacoes)
            //publicacoes.forEach(publicacao => console.log(publicacao), adicionaPublicacao(publicacao))

        } else {
            erroAjax.classList.remove("invisivel")
        }
    })
    xhr.send();
});

// Adiciona Publicacao no HTML
let adicionaPublicacao = (publicacao) => {

    let newDiv =  document.createElement('div');

    newDiv.id = 'id-lista-decisao'
    newDiv.className= 'formato-publicacao'

    //newDiv.setAttribute('title', 'Abaixo segue o texto da decisao :');
    let newDivText = document.createTextNode('Publicado na data : xx/xx/xxxx')
    newDiv.appendChild(newDivText)

    let newDivContent = document.createTextNode(publicacao.decisao)
    newDiv.appendChild(newDivContent)

    //console.log(newDivContent)

    let lista = document.querySelector('.item-lista-publicacao')
    let local = document.querySelector('.formato-publicacao')

    //console.log(lista)

    //console.log(newDiv);

    local.insertBefore(newDiv, lista);

}
