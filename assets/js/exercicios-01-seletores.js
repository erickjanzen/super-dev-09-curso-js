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