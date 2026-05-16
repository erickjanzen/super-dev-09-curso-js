function executarPerfil(){
    const nomeUsuario = document.getElementById("nomeUsuario")
    const campoUsuario = document.getElementById("caixaNome")
    campoUsuario.value = nomeUsuario.value

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
}