let url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))
    
const mostrarData = (data) => {
    //console.log(data)
    let body = ''
    for (let i = 0; i<data.length; i++){
        body += `
        <div class="col-4">
            <div class="card mt-3 mb-3 shadow-lg">
                <div class="card-body">
                    <h5 class="card-title mb-0"> ${data[i].id}. ${data[i].name} </h5>
                    <hr class="mt-2 mb-2">
                    <p class="card-text"> username: ${data[i].username} </p>
                    <p> Email: ${data[i].email} </p>
                    <address>
                        <strong> ${data[i].address.street} </strong> <br>
                        ${data[i].address.city}, ${data[i].address.suite} <br>
                        <a href="https://maps.google.com/?ll=${data[i].address.geo.lng},${data[i].address.geo.lat}" class="btn"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                                <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                            </svg>
                            Geolocalization 
                        </a> <br>
                        <abbr>Phone:</abbr> ${data[i].phone}
                    </address>
                    <hr class="mt-2 mb-2">
                    <h6 class="card-title mb-0"> <strong>Company</strong> </h6>
                    <p> ${data[i].company.name} </p>
                    <i> ${data[i].company.catchPhrase} </i> <br>
                    <i> ${data[i].company.bs} </i>
                </div>
            </div>
        </div> `                
    }
    document.getElementById('data').innerHTML = body
} 