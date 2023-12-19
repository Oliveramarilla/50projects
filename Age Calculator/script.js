const date = document.getElementById('date')
const btn = document.querySelector('.btn')


//limita la fecha a ser hoy o menor

date.max = new Date().toISOString().split('T')[0]

function calculateAge(){
    const today = new Date()

    const y1 = today.getFullYear()
    const m1 = today.getMonth() + 1
    const d1 = today.getDate()

    const dateValue = new Date(date.value)
    const y2 = dateValue.getFullYear()
    const m2 = dateValue.getMonth() + 1
    const d2 = dateValue.getDate()

    let y3,m3,d3;
    y3 = y1 - y2

    if(m2 > m1){
        m3 = 12+m1-m2
        y3--
    }else{
        m3 = m1 - m2
    }

    if(d2>d1){
        d3 = getDaysInMonth(y1,m1)
    }else{
        d3 = d1 - d2
    }



    console.log(y3,m3,d3);
}


function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate()
}
