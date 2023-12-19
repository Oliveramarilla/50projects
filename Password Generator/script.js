const field = document.querySelector('#password')

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbol = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'

const all = upperCase + lowerCase + number + symbol

length = 12;

function generatePassword(){
    let password =''
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]
    
    while(password.length < length){
        password += all[Math.floor(Math.random() * all.length)]
    }

    field.value = password
}


function copyPassword(){
    field.select()
    document.execCommand('copy')
}


