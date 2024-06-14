const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
// const day = document.getElementById('day');
const clock = setInterval(function time(){
    let today = new Date()
    let h = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()


    hour.textContent = h
    minute.innerText = min
    second.innerText = sec
})