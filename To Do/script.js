const searchBox = document.querySelector('.search-box')
const addBtn = document.querySelector('.add-btn')
const itemList = document.querySelector('#items-list')

startData()

addBtn.addEventListener('click',()=>{
    if(searchBox.value !== ''){
    let li = document.createElement('li')
    li.innerText = searchBox.value
    itemList.appendChild(li)
    let span = document.createElement('span')
    li.appendChild(span)
    span.innerText = '\u00d7'
    }else{
        alert('You should write something!')
    }
    searchBox.value = ''
    saveData()
})

itemList.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})


function saveData(){
    localStorage.setItem('data',itemList.innerHTML)
}
function startData(){
    itemList.innerHTML = localStorage.getItem('data')
}


