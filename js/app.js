function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt (document.getElementById('qtd').value);
    
    if (tipo.value == 'pista') {
        comprarPista(qtd); //É mais vi´vel criar uma função para que fique mais fácil fazer manutenções à posteriori.
    }

    if(tipo.value == 'superior') {
        comprarSuperior(qtd);
    }

    if (tipo.value == 'inferior') {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt (document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) //  Caso eu não coloque a propriedade textContent, o if que criei irá pegar a tag inteira, e não apenas o conteúdo de texto, que é a minha intenção. 
    {
        alert('Quantidade indisponível para tipo Pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra realizada com sucesso!');

    }
}


function comprarSuperior(qtd) {
    let qtdSuperior = parseInt (document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo Cadeira Superior')
    } else {
        qtdSuperior = qtdSuperior -qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt (document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para o tipo Cadeira Inferior');
        } else {
            qtdInferior = qtdInferior - qtd;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
            alert ('Compra realizada com sucesso!');
        }
}

