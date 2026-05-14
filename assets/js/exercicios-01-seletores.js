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

function exercicio03ClacularMediaEscolar(){
   const primeiraNota = document.getElementById("nota1")
   const nota1 = parseFloat(primeiraNota.value)
   const segundaNota = document.getElementById("nota2")
   const nota2 = parseFloat(segundaNota.value)
   const terceiraNota = document.getElementById("nota3")
   const nota3 = parseFloat(terceiraNota.value)

   let media = (nota1 + nota2 + nota3) / 3
   let status = ""

   if(media < 7){
    status = "Reprovado"
   } else {
    status = "Aprovado"
   }

   const campoResultado = document.getElementById("media")
   campoResultado.value = `
   Média final: ${media}
   Status: ${status}
   `
}

function exercicio04CalcularDescontoProduto(){
    const dadosInformados = document.getElementById("produto")
    const produto = dadosInformados.value
    const descontoInformado = document.getElementById("desconto")
    const desconto = descontoInformado.value
    const precoProduto = document.getElementById("preco")
    const preco = parseFloat(precoProduto.value)
    let valorProduto = 0
    debugger
    if(desconto === "10%"){
       valorProduto = preco * 0.9
    } else if(desconto === "20%"){
        valorProduto = preco * 0.8
    } else if(desconto === "30%"){
        valorProduto = preco * 0.7
    }

    const resultadoFinal = document.getElementById("resultado")
    resultadoFinal.value = `
Produto: ${produto}
Desconto: ${desconto}
Preço final: R$ ${valorProduto.toFixed(2)}`
}

function exercicio05SimularSalario(){
    const nomeFuncionario = document.getElementById("funcionario")
    const funcionario = nomeFuncionario.value
    const salarioFuncionario = document.getElementById("salario")
    const salario = parseFloat(salarioFuncionario.value)
    const cargoFuncionario = document.getElementById("cargo")
    const cargo = cargoFuncionario.value
    let cargoLet = ''
    let salarioAjustado

    if(cargo === "pleno"){
        salarioAjustado = salario * 1.3
        cargoLet = 'Pleno'
    } else if(cargo === "senior"){
        salarioAjustado = salario * 1.6
        cargoLet = 'Sênior'
    } else {
        salarioAjustado = salario
        cargoLet = 'Júnior'
    }

    const resultadoFinal = document.getElementById("resultado2")
    resultadoFinal.value = `Nome: ${funcionario}
Cargo: ${cargoLet}
Salário atual: ${salario}
Salário reajustado: ${salarioAjustado}`
}
