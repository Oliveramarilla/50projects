const url = 'https://v2.jokeapi.dev/joke/Any?type=single'
const btn = document.querySelector('#btn')
const joke = document.querySelector('#joke')
const container = document.querySelector('.container')


async function getJoke(){
    joke.classList.remove('show')
    container.classList.remove('show')
    let response = await fetch(url)
    let data = await response.json()

    joke.innerHTML = data.joke
    joke.classList.add('show')
    container.classList.add('show')

}