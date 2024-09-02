import { useState } from "react";

function CrearPlaylist(){

    const [lista, setLista] = useState({titulo:'', descripcion:'', imageUrl:'',})

    function handleSubmit(){

    }





    return(
        <>
        <h1>Creá tu Playlist</h1>
        <form onSubmit={handleSubmit} >
            <label htmlFor="tituloLista"></label>
            <input id="tituloLista" type="text" value={tituloLista} onChange={handleChange} />
            <label htmlFor="descripcionLista"></label>
            <input id="descripcionLista" type="text" value={descripcionLista} onChange={handleChange} />
            <label htmlFor="imagenLista"></label>
            <input id="imagenLista" type="text" value={imagenLista} onChange={handleChange} />
        </form>

        </>
    )
}