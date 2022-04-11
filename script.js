let display = document.getElementById("display")

function clean() {
     display.innerHTML = " "
    
}

//função insert > ao clicar no item(numero, operador ou ponto) insere no display
//é criado uma variavel chamado numero que posteriormente é colocado ao lado do que valor já existente
function insert(num) {
    let numero = display.innerHTML
    display.innerHTML = numero + num
}

//Função back > volta uma casa apagando o valor anterior
function back() {
    var resultado = display.innerHTML
    display.innerHTML = resultado.substring(0, resultado.length -1)
}

//Realiza o calculo 
function calc() {
    var calculo = display.innerHTML
    if (calculo) {
        display.innerHTML = eval(calculo)
    } else {
        display.innerHTML = "erro"
    }
}