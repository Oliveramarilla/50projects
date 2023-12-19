const circles = document.querySelectorAll('.circle')
const progress = document.querySelector('.progress')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')


let active = 1

next.addEventListener('click',(()=>{
    if (active < circles.length){
        active++
        activeAdd()
        if(active >= circles.length){
            next.disabled = true
        }
    }
    if(active > 1){
        prev.disabled = false
    }
    progressMove(active)
}))


function activeAdd(){
    for(let x = 1;x < active;x++){
        circles[x].classList.add('active')
    }
}

prev.addEventListener('click',()=>{
    if(active > 1){
        circles[active -1].classList.remove('active')
        active--  
    }
    if(active < circles.length){
        next.disabled = false
    }
    if(active < 2){
        prev.disabled = true
    }
    progressMove(active)
})

function progressMove(position){
    switch(position){
        case 1:
            progress.style.width = '0%';
            break;
        case 2:
            progress.style.width = '33%';
            break;
        case 3:
            progress.style.width = '66%';
            break;
        case 4:
            progress.style.width = '99%';
            break;
    }
    
}