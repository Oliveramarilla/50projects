const searchBtn = document.querySelector('#search-btn')
const searchText = document.querySelector('#search-text')


searchBtn.addEventListener('click',()=>{
    if(searchText.classList.contains('active')){
        searchText.classList.remove('active')
    }
    else{
        searchText.classList.add('active')
    }
})