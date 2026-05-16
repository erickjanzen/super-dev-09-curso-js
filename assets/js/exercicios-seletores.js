function caixaVerde(){
    const caixaModificar = document.getElementById("caixaPrincipal")
    caixaModificar.classList.add("verde")
    caixaModificar.classList.remove("amarelo" , "vermelho", "preto")
}

function caixaAmarela(){
    const caixaModificar = document.getElementById("caixaPrincipal")
    caixaModificar.classList.remove("default")
    caixaModificar.classList.remove("verde" , "vermelho", "preto")
    caixaModificar.classList.add("amarelo")
}

function caixaVermelha(){
    const caixaModificar = document.getElementById("caixaPrincipal")
    caixaModificar.classList.remove("verde" , "amarelo", "preto")
    caixaModificar.classList.add("vermelho")
}

function redefinir(){
    const caixaModificar = document.getElementById("caixaPrincipal")
    caixaModificar.classList.remove("verde" , "amarelo", "vermelho", "aumentar", "diminuir")
    caixaModificar.classList.add("default")
}

function aumentarBotao(){
    const caixaModificar = document.getElementById("caixaPrincipal")
    caixaModificar.classList.remove("diminuir")
    caixaModificar.classList.add("aumentar")
}

function diminuirBotao(){
    const caixaModificar = document.getElementById("caixaPrincipal")
    caixaModificar.classList.remove("aumentar", "default")
    caixaModificar.classList.add("diminuir", "default")
}