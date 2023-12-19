const timeDisplay = document.querySelector('#timeDisplay')
timer = null

let [hours,minutes,seconds] = [0,0,0]

function timeCount(){

    seconds++
    if(seconds == 60){
        minutes++
        seconds = 0
        if(minutes == 60){
            hours++
            minutes = 0
        }
    }

    let s = seconds < 10? "0" + seconds : seconds
    let m = minutes < 10? "0" + minutes : minutes
    let h = hours < 10? "0" + hours : hours

    timeDisplay.innerHTML = `${h}:${m}:${s}`
}



function startWatch(){
    console.log(timer);
    if(timer!== null){
        clearInterval(timer)
    }
    
    console.log(timer);
    timer = setInterval(timeCount, 1000)
}

function stopWatch(){
    clearInterval(timer)
}

function resetWatch(){
    clearInterval(timer)
    [hours,minutes,seconds] = [0,0,0]
    timeDisplay.innerHTML = '00:00:00'
}