//Hora do Dia

function carregarHoraDoDia() {
    var mensagemInformandoHora = window.document.getElementById('mensagemInformandoHora')
    var fotoHoraDoDia = window.document.getElementById('imagemHoraDoDia')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    if (minutos < 10) {
        minutos = `0${minutos}`
    }
    
    mensagemInformandoHora.innerHTML = `Agora são ${hora}:${minutos} horas` 
    
    if (hora >= 0 && hora < 12) {
        fotoHoraDoDia.src="imagens/dia.png"
        document.body.style.background = "#9c9cf8"
    } else if (hora >= 12 && hora <= 18) {
        fotoHoraDoDia.src="imagens/tarde.png" 
        document.body.style.background = "#ff8e54"
    } else {
        fotoHoraDoDia.src="imagens/noite.png"
        document.body.style.background = "black"
    }
}

//Verificador de Idade

function verificarIdade() {
    var dataVerificador = new Date()
    var ano = dataVerificador.getFullYear()
    var anoDeNascimento = document.getElementById('anoDeNascimento')
    var resultadoVerificadorIdade = document.querySelector('div#resultadoVerificadorIdade')
    if (anoDeNascimento.value.length == 0 || anoDeNascimento.value > ano) {
        window.alert('ERROR! Verifique se os dados estão corretos.')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(anoDeNascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'um homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/homem_crianca.png') 
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/homem_jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem_adulto.png')
            } else {
                img.setAttribute('src', 'imagens/homem_idoso.png')
            }
        } else if (sexo[1].checked) {
            genero = 'uma mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/mulher_crianca.png')            
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/mulher_jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher_adulta.png')
            } else {
                img.setAttribute('src', 'imagens/mulher_idosa.png')
            }                 
        }
        resultadoVerificadorIdade.style.textAlign = 'center'
        resultadoVerificadorIdade.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultadoVerificadorIdade.appendChild(img)              
    }     
}

//Analisador de Numeros

let sequenciaDeNumeros = []    
let numeroAnalisador = document.getElementById('numeroAnalisador') 
let telaComNumerosAnalisador = document.getElementById('telaComNumerosAnalisador')
let limparAnalisador = document.getElementById('limparAnalisador')

function adicionar() {   

    if (numeroAnalisador.value.length == 0) {
        window.alert('Por favor, adicione um valor')
    }

    let numAnalisador = Number(numeroAnalisador.value)
    
    if (numAnalisador < 1 || numAnalisador > 100) {
        window.alert('Valor inválido')
    } else {
        for (let j = 0; j < sequenciaDeNumeros.length; j++)
        if (numAnalisador == sequenciaDeNumeros[j]) {
            window.alert('Número já adicionado!')
            return false                           
        }       
        sequenciaDeNumeros.push(numAnalisador)
        sequenciaDeNumeros.sort()   
                        
        let itemAddAnalisador = document.createElement('option')
        itemAddAnalisador.text = `Valor ${numAnalisador} adicionado`
        telaComNumerosAnalisador.appendChild(itemAddAnalisador)       
    }
    numeroAnalisador.value = ''
    numeroAnalisador.focus()                
}

function finalizarAnalisador() {    
    if (sequenciaDeNumeros.length == 0) {
        window.alert('Impossível finalizar. Adicione valores')
    } else {
        let maiorNumero = Math.max.apply(null, sequenciaDeNumeros)
        somaTotal = 0
        for (let i = 0; i < sequenciaDeNumeros.length; i++) {        
            somaTotal += sequenciaDeNumeros[i]
        }

        let mediaDivisao = somaTotal/sequenciaDeNumeros.length  
        let media = parseFloat(mediaDivisao.toFixed(2))      
        resultadoAnalisador.innerHTML = `Ao todo, temos ${sequenciaDeNumeros.length} números cadastrados <br>`
        resultadoAnalisador.innerHTML += `O maior valor informado foi ${maiorNumero} <br>`
        resultadoAnalisador.innerHTML += `O menor valor informado foi ${sequenciaDeNumeros[0]} <br>`
        resultadoAnalisador.innerHTML += `Somando todos os valores, temos ${somaTotal} <br>`
        resultadoAnalisador.innerHTML += `A média dos valores digitados é ${media}`

        limparAnalisador.innerHTML = '<br><input type="button" value="Limpar Tela" onclick="limparTelaAnalisador()">'
    }    
}

function limparTelaAnalisador() {
    numeroAnalisador.value = ''
    telaComNumerosAnalisador.innerHTML = ''
    resultadoAnalisador.innerHTML = ''
    limparAnalisador.innerHTML = ''
    sequenciaDeNumeros.length = 0
}

//Contador

let inicioContador = document.getElementById('numeroInicioContador')
let fimContador = document.getElementById('numeroFimContador')
let passoContador = document.getElementById('numeroPassoContador')
var resultadoContador = document.getElementById('resultadoContador')
let limparContador = document.getElementById('limparTelaContador')

function contar() {
    if (inicioContador.value.length == 0 || fimContador.value.length == 0 || passoContador.value.length == 0) {        
        window.alert('ERROR! Impossível contar. Confira se os números são válidos')
    } else {
        resultadoContador.innerHTML = 'Contando: '
        var numeroInicio = Number(inicioContador.value)
        var numeroFim = Number(fimContador.value)
        var numeroPasso = Number(passoContador.value)

        if (numeroPasso <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            numeroPasso = 1
        }

        if (numeroInicio < numeroFim) {
            for(let contagem = numeroInicio; contagem <= numeroFim; contagem += numeroPasso) {
                resultadoContador.innerHTML += `${contagem} \u{1F601} `
            }            
        } else {
            for(let contagem = numeroInicio; contagem >= numeroFim; contagem -= numeroPasso) {
                resultadoContador.innerHTML += `${contagem} \u{1F601} `
        } 
        } limparContador.innerHTML = '<br><input type="button" value="Limpar Tela" onclick="limparTelaContador()">'    
    }    
}

function limparTelaContador(){
    inicioContador.value = ''
    fimContador.value = ''
    passoContador.value = ''
    resultadoContador.innerHTML = ''
    limparContador.innerHTML = ''
}

//Tabuada

let numeroDeEntradaTabuada = document.getElementById('numeroDeEntradaTabuada')
let resultadoTabuada = document.getElementById('resultadoTabuada')
let limparTabuada = document.getElementById('limparTabuada')    

function gerarTabuada() {
    
    if (numeroDeEntradaTabuada.value.length == 0) {
        window.alert('Por favor, insira um número')
    } else {
        let primeiroFator = Number(numeroDeEntradaTabuada.value)
        let segundoFator = 0
        resultadoTabuada.innerHTML = ''   
        while (segundoFator <= 10) {
            let item = document.createElement('option')
            item.text = `${primeiroFator} x ${segundoFator} = ${primeiroFator * segundoFator}`
            resultadoTabuada.appendChild(item)
            segundoFator++            
        }
        limparTabuada.innerHTML = '<br><input type="button" value="Limpar Tela" onclick="limparTelaTabuada()">'
    }       
}

function limparTelaTabuada() {
    numeroDeEntradaTabuada.value = ''
    resultadoTabuada.innerHTML = '<select id="resultadoTabuada" size="11"><option>Digite um número acima</option></select>'   
    limparTabuada.innerHTML = ''
}
