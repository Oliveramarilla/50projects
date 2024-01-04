const bookList = document.querySelector("#bookList")
const submit = document.querySelector('#submit')
const bookListJS = []

class Book {
    constructor(title,author,id){
        this.title = title
        this.author = author
        this.id = id
    }
}


class UI {
    addBook(book){
        const row = document.createElement('tr')
        row.innerHTML = ` <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.id}</td>
        <td><a id="delete" class="d-block fw-bold btn-danger btn">X</a></td>
    </tr>`

    bookList.appendChild(row)
    }

    showAlert(message,type){
        const div = document.createElement('div')
        div.className = `alert mx-auto text-center w-50 alert-${type}`
        div.innerHTML = message
        
        const main = document.querySelector('main')
        const form = document.querySelector('form')
        main.insertBefore(div,form)

        setTimeout(()=>{
            div.remove()
        },3000)
        
    }

    removeBook(book){
        book.parentElement.parentElement.remove()   
    }
    clearFields(){
        document.getElementById('book-title').value= ""
        document.getElementById('author').value= ""
        document.getElementById('id').value = ""
    }
}




submit.addEventListener('click',(e)=>{
    e.preventDefault()
    
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('author').value;
    const id = document.getElementById('id').value;
    bookListJS.push({
        title,
        author,
        id
    })

    const book = new Book(title,author,id)
    
    let ui = new UI();
    
    if(title === "" || author === "" || id === "") ui.showAlert("Complete the fields.","warning")
    else{
        ui.addBook(book)
        ui.showAlert("Book added!","success")
        ui.clearFields()
    }
})

bookList.addEventListener("click",(element)=>{

    const ui = new UI()
    if(element.target.id === "delete"){
    ui.removeBook(element.target)
    ui.showAlert('Book deleted',"danger")
}
})


