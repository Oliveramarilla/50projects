const contentCards = document.querySelectorAll(".content")
const container = document.querySelector(".container")


//tuve que mirar el codigo de git por que no me salia


document.addEventListener("scroll", ()=>{
    const triggerLine = window.innerHeight *3/5

    contentCards.forEach(card =>{
        let cardLine = card.getBoundingClientRect().top

        if(triggerLine > cardLine) card.classList.add('show')
        else card.classList.remove("show")
    })
})