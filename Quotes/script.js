const quote = document.querySelector("#quote")
const author = document.querySelector("#author")

const url = 'https://api.quotable.io/random'
let data
async function getQuote(url){
    let response = await fetch(url)
    data = await response.json()
    quote.innerHTML = data.content 
    author.innerHTML = data.author 
}

function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML}  ----by ` + author.innerHTML,'tweet Window','width= 600px,height=400px')
}


getQuote(url)
