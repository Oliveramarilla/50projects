const closed = document.getElementById('close')
const opene = document.getElementById('open')
const circle = document.getElementById('circle')
const container = document.querySelector('.container')

closed.addEventListener('click',()=>{
    circle.classList.remove('active')
    container.classList.remove('active')

})


opene.addEventListener('click',()=>{
    circle.classList.add('active')
    container.classList.add('active')
})

