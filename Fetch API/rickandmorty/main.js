//const url = 'https://pokeapi.co/api/v2/pokemon/75';
const url = 'https://rickandmortyapi.com/api/character/77'; 

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    let element = document.getElementById('element')
    element.innerHTML = `
        <p> ${data.name} </p>
        <p> ${data.status} </p>        
        <img src=" ${data.image} "/>
        <a href="${data.location.url} "> ${data.location.name}  </a>
    `;

})
.catch(err=>console.log(err))