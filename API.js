window.addEventListener(`load`, obtenerDatos);
function obtenerDatos() {
    const nasa_api=`A35uUdFOVGVBfpeScUMROF8RSzyfc4x1vslr7vp7`
    const ruta = `https://api.nasa.gov/planetary/apod?api_key=${nasa_api}`;

    fetch(ruta)
    .then(respuesta => respuesta.json())
    .then(resultado =>mostrarDatos(resultado))
}
function mostrarDatos({date, explanation, media_type, title, url}){

    const titulo = document.querySelector(`#titulo`);
    titulo.innerHTML=title;
    const fecha = document.querySelector(`#fecha`);
    fecha.innerHTML=date;
    const fecha = document.querySelector(`#descripcion`);
    descripcion.innerHTML=explanation;
    const fecha = document.querySelector(`#c_multimedia`);
    if(media_type==`video`){
        
        multimedia.innerHTML=`<iframe class="embed-responsive-item" src="..."></iframe>`

        innerHeight.valueOf();



    }
  
}
