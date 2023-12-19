const addBtn = document.querySelector('#add-btn')
const notesBox = document.querySelector('.notes-box')
let notes =document.querySelectorAll('.note')

loadData()
addBtn.addEventListener('click',()=>{
    let p = document.createElement('p')
    p.className ='note'
    p.setAttribute('contenteditable','true')

    let img = document.createElement('img')
    img.src = "images/delete.png"
    p.appendChild(img)
    notesBox.appendChild(p)
    saveData()
})

notesBox.addEventListener('click',function(e){
    if (e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        saveData()
    }else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll('.notes-box')


        notes.forEach (nt =>{
            nt.onkeyup = function(){
                saveData()
            }
        })
    }
})


function saveData(){
    localStorage.setItem('notes',notesBox.innerHTML)
}

function loadData(){
    notesBox.innerHTML = localStorage.getItem('notes')
}