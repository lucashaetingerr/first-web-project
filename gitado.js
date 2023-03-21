function verificar() {
    const val1 = document.getElementById('txt_valor1').value
    const val2 = document.getElementById('txt_valor2').value
    const verif = document.querySelector('div#verif')

    if (val1 === "" || val2 === "") {
        verif.innerHTML = "Por favor, insira valores em ambos os campos."
    } else {
        const result = val1 - val2
        if (result >= 0) {
            verif.innerHTML = `Você pode comprar o(s) produto(s). Seu novo saldo será de R$${result.toFixed(2)}.`
        } else {
            verif.innerHTML = "Você não pode comprar o(s) produto(s)."
        }
    }
}

function limpar() {
    const verif = document.querySelector('div#verif')
    console.log("Limpando os campos da página...")
    verif.innerHTML = ""
    document.getElementById("txt_valor1").value = ""
    document.getElementById("txt_valor2").value = ""
}