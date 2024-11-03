let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let num = 0
let id


function stugum () {
    console.log(num)
    num++
}

function startt () {
    id = setInterval(stugum , 1000)
}

function stopp () {
    clearInterval(id)
}

function resett () {
    num = 0
    id = setInterval(stugum, 1000)
}

start.addEventListener("click" , startt)
stop.addEventListener("click" , stopp)
reset.addEventListener("click" , resett)
