function executarPerfil(){
    debugger
    const nomeUsuario = document.getElementById("nomeUsuario")
    const campoUsuario = document.getElementById("caixaNome")
    campoUsuario.innerText = nomeUsuario.value
   

    const temaUsuario = document.getElementById("temaEscolhido")
    const temaCard = document.getElementById("areaUsuario")

    if(temaUsuario.value === "laranja"){
        temaCard.classList.remove("aura", "roxo")
        temaCard.classList.add("laranja")
    } else if(temaUsuario.value === "roxo"){
        temaCard.classList.remove("aura", "laranja")
        temaCard.classList.add("roxo")
    } else if(temaUsuario.value === "aura"){
        temaCard.classList.remove("roxo", "laranja")
        temaCard.classList.add("aura")
    }
    const destaque = document.getElementById("destaque")
    if(destaque.checked){
        campoUsuario.classList.add("destaque")
    } else {
        campoUsuario.classList.remove("destaque")
    }
}