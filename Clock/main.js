
let showHour = () => {

    let clock = document.getElementById('clock')
    let dateData = document.getElementById('dateData')

    let days = [
        'Lunes', 
        'Martes', 
        'Miercoles',
        'Jueves', 
        'Viernes', 
        'Sabado', 
        'Domingo'
    ]

    let months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ]

    let body = ''

    // Get Hour
    let dateHour = new Date()
    let hour = dateHour.getHours()
    let minutes = dateHour.getMinutes()
    let seconds = dateHour.getSeconds()

    let hr = (hour > 12) ? hour-12 : hour
    let acronym = (hour > 12) ? 'PM' : 'AM'
    
    if (hr < 10) { hr = '0' + hr }
    if (minutes < 10 ) { minutes = '0' + minutes }
    if (seconds < 10 ) { seconds = '0' + seconds }

    // Get Day
    let day = dateHour.getDate()
    let month = dateHour.getMonth()
    let year = dateHour.getFullYear()
    let m = months[month]


    // OutPut content
    dateData.textContent = `${day}-${m}-${year}`
    clock.textContent = `${hr}:${minutes}:${seconds} ${acronym}`

}

setInterval(
    showHour, 1000
)