function contatoPessoal(){
    const spanPessoal = document.getElementById("spanDoPessoal")
    spanPessoal.classList.remove("sumir")

    const spanComercial = document.getElementById("spanDoComercial")
    spanComercial.classList.add("sumir")
}

function contatoComercial(){
    const spanComercial = document.getElementById("spanDoComercial")
    spanComercial.classList.remove("sumir")

    const spanPessoal = document.getElementById("spanDoPessoal")
    spanPessoal.classList.add("sumir")
}

function validarCadastro(){
    const nomePessoa = document.getElementById("nome")
    const nome = nomePessoa.value
    const pessoal = document.getElementById("pessoal")
    const comercial = document.getElementById("comercial")
    const fonePessoal = document.getElementById("numeroPessoal")
    const numeroPessoal = parseInt(fonePessoal.value)
    const foneComercial = document.getElementById("numeroComercial")
    const numeroComercial = parseInt(foneComercial.value)
    const numeroCpf = document.getElementById("cpf")
    const cpf = parseInt(numeroCpf.value)
    const numeroCnpj = document.getElementById("cnpj")
    const cnpj = parseInt(numeroCnpj.value)
    const motivoP = document.getElementById("motivoPessoal")
    const motivoPessoal = motivoP.value
    const motivoC = document.getElementById("motivoComercial")
    const motivoComercial = motivoC.value
    const nomeEmpresa = document.getElementById("nomeEmpresa")
    const empresa = nomeEmpresa.value

    let contato = ""

    if (pessoal.checked){
        contato = "Pessoal"
    } else if (comercial.checked){
        contato = "Comercial"
    }

    const areaDeConfirmacao = document.getElementById("areaConfirmacao")
    areaDeConfirmacao.classList.remove("sumir")

    if(contato === "Pessoal"){
    areaDeConfirmacao.innerText = `Nome: ${nome}
Contato: ${contato}
CPF: ${cpf}
Telefone: ${numeroPessoal}
Motivo de contato: ${motivoPessoal}`
    } else if (contato === "Comercial"){
    areaDeConfirmacao.innerText = `Nome: ${nome}
Contato: ${contato}
CNPJ: ${cnpj}
Empresa: ${empresa}
Telefone: ${numeroComercial}
Motivo de contato: ${motivoComercial}`
    }
    
}