function verificar(){
    var val1 = document.getElementById('txt_valor1')
    var val2 = document.getElementById('txt_valor2')
    var verif = document.querySelector('div#verif')
    var result = Number(val1.value-val2.value)

    if ( (result>=0) && ( (val1!=0) && (val2!=0) ) ){
        console.log(result)
        verif.innerHTML = (`Você pode comprar o produto. Seu novo saldo será de R$${result}`)
    }else if(result<0){
        console.log(result)
        verif.innerHTML = `Você não pode comprar o produto`
    }else{
        console.log("Insira valores ao campo 1 e 2")
        verif.innerHTML = "Insira valores ao campo 1 e 2"
    }

}

function limpar(){
    var val1 = document.getElementById('txt_valor1')
    var val2 = document.getElementById('txt_valor2')
    var verif = document.querySelector('div#verif')
    console.log("Limpando os campos da página...")
    verif.innerHTML = ""
    document.getElementById("txt_valor1").value = null
    document.getElementById("txt_valor2").value = null
}