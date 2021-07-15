
const URL = 'https://www.superheroapi.com/api/10222604989826831/34'; 

fetch(URL, {
    'mode': 'no-cors',
    'headers': {
        'Access-Control-Allow-Origin': '*',
    }
})

    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(err => console.log(err))

    const mostrarData = (data) => {
        console.log(data)
        let body = ''
        for (let i = 0; i<data.length; i++){
            body += `
                <p> ${data[i].name} </p>
            
            `                
        }
        document.getElementById('App').innerHTML = body
    }
