const contenido = document.getElementById("contenido")
const fetchData = async () => { 
    try{
        const respuesta = await fetch("https://rickandmortyapi.com/api/character")
        const data = await respuesta.json()
        const pregunta = data.results

        pregunta.forEach(pregun => {
            const item = document.createElement("div")
            item.className = "personaje"
            item.innerHTML += ` 
        <h1>${pregun.name}</h1> 
        <img src="${pregun.image}">
        `;
        contenido.appendChild(item)
        });
    }catch(error){
        console.error("no se pudo");
    }
}
fetchData()