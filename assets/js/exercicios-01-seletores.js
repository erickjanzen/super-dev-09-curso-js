function exercicio01CompararDoisNumeros(){
    const campoNumero1 = document.getElementById("numero1")
    const numero1 = parseFloat(campoNumero1.value);
    const campoNumero2 = document.getElementById("numero2")
    const numero2 = parseFloat(campoNumero2.value);

    if(numero1 === numero2){
        alert("Os números são iguais")
    } else if (numero1 > numero2){
        alert(`O maior número é ${numero1}`)
    } else {
        alert(`O maior número é ${numero2}`)
    }
}

function exercicio02ClassificarIdade(){
    const campoNome = document.getElementById("nome");
    const nome = campoNome.value
    const campoIdade = document.getElementById("idade")
    const idade = parseInt(campoIdade.value)

    let faixaEtaria = ""

    if(idade <= 0) {
        alert("Idade inválida")
    } else if(parseInt(idade) < 18){
        faixaEtaria = "Criança"
    } else if (parseInt(idade) < 60){
        faixaEtaria = "Adulto"
    } else {
        faixaEtaria = "Idoso"
    }

alert(`Nome do usuário: ${nome}
Idade do usuário: ${idade}
Faixa etária: ${faixaEtaria}`)
}