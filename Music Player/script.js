const qs = (query) => document.querySelector(query)


const PROGRESS = qs('#progress')
const SONG = qs('#song')
const actionBtn = qs('.action-btn')


SONG.onloadedmetadata = function(){
    PROGRESS.max = SONG.duration
    PROGRESS.value = SONG.currentTime
}




function playPause(){
    if(actionBtn.classList.contains('fa-play')){
        SONG.play()

        actionBtn.classList.remove('fa-play')
        actionBtn.classList.add('fa-pause')
    }
    else{
        SONG.pause()

        actionBtn.classList.remove('fa-pause')
        actionBtn.classList.add('fa-play')
    }
}



PROGRESS.addEventListener('change',()=>{
    SONG.currentTime = PROGRESS.value
    SONG.play()
    
    actionBtn.classList.remove('fa-play')
    actionBtn.classList.add('fa-pause')
})

if(SONG.play()){
    setInterval(()=>{
        PROGRESS.value = SONG.currentTime
    },500)
}