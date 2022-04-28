let display = document.getElementById("display")

function clean() {
    display.innerHTML = " "
}

function insert(num) {
    let numero = display.innerHTML
    display.innerHTML = numero + num
}

function back() {
    var resultado = display.innerHTML
    display.innerHTML = resultado.substring(0, resultado.length -1)
}

function calc() {
    var calculo = display.innerHTML 
    if (calculo) {
        display.innerHTML = eval(calculo)
    } else {
        display.innerHTML = "erro"
    }
}