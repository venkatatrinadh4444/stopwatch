let startBtn = document.getElementById('startStop')
let resetBtn = document.getElementById('reset')
let hourEl = document.getElementById('hour')
let minuteEl = document.getElementById('minute')
let secondEl = document.getElementById('second')


let count = 0
let minCount = 0
let hourCount = 0

let interval=null

let intervalFun=() => {
interval = setInterval(() => {
    count += 1;
    if (count < 10) {
        secondEl.textContent = "0" + count;
    }
    else if (count < 60)
        secondEl.textContent = count;

    else if (count === 60) {
        count = 0;
        minCount += 1;
        if (minCount < 10) {
            minuteEl.textContent = "0" + minCount
        }
        else if (minCount < 60) {
            minuteEl.textContent = minCount;
        }
        else if(minCount===60) {
            minCount=0;
            hourCount+=1
            if(hourCount<10) 
            hourEl.textContent="0"+hourCount;
            else if(hourCount>9)
            hourEl.textContent=hourCount
        }
    }
}, 1000)
}

let click = "start";
startBtn.onclick = function () {
    if (click === "start") {
        intervalFun()
        startBtn.textContent = "Stop"
        click = "stop"
    }
    else if (click === "stop") {
        clearInterval(interval)
        startBtn.textContent = "Start"
        click = "start"
    }
}

resetBtn.onclick=function() {
    clearInterval(interval)
    hourCount=0
    minCount=0
    count=0
    startBtn.textContent="Start"
    click="start"
    hourEl.textContent="0"+hourCount
    minCount.textContent="0"+minCount
    secondEl.textContent="0"+count
}