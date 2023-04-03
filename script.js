var inputBoleto = document.querySelector('#pagamento-boleto')
var inputCredito = document.querySelector('#teste')
var inputDebito = document.querySelector('#pagamento-debito')
var divPagamento = document.querySelector('#processo-pagamento')
var textoBoleto = document.createElement('p')
textoBoleto.classList.add('texto-boleto')

inputCredito.addEventListener('click', teste)
inputDebito.addEventListener('click', teste)
inputBoleto.addEventListener('click', teste)


function teste(){

    if(inputBoleto.checked){
        divPagamento.appendChild(textoBoleto)
        for (let input of document.getElementsByClassName('dadosCartao')) {
            input.style.display = 'none'
          }
        textoBoleto.innerHTML = `<strong>Finalize seu pedido para receber o boleto e-mail.</strong><br>O prazo de validade do seu boleto é de até 3 dias úteis, você pode imprimir e pagar no banco ou utilizar o código que será enviado para o email cadastrado para pagar pela internet. Após o pagamento, o status do seu pedido será atualizado também em até 3 dias úteis (o tempo de atualização pode ser maior durante feriados). Além disso, você precisa ter 18 anos ou mais para que a sua compra seja autorizada.`  
    }else if(inputCredito.checked || inputDebito.checked){
        textoBoleto.remove()  
        for (let input of document.getElementsByClassName('dadosCartao')) {
            input.style.display = 'block'
        }          
    }
}
