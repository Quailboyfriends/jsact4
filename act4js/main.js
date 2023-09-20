const elementoBoton = document.getElementById("botonCambiarModo")

elementoBoton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro")

    let emoji;

    if(document.body.classList.contains("oscuro")){
        emoji = "🌞"
    } else {
        emoji = "🌙"
    }
    

    elementoBoton.textContent = emoji;
})


