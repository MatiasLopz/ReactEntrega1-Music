import { ChangeEvent, FormEvent, useState } from "react";
import AlbumCard from "./AlbumCard";

type Props ={
    setPlaylist : React.Dispatch<React.SetStateAction<{
        tituloLista: string;
        descripcionLista: string;
        imagenLista: string;
    }[]>>;
}

export default function CrearPlaylist(props : Props){

    const [tituloLista, setTitulo] = useState('');
    const [descripcionLista, setDescripcion] = useState('');
    const [imagenLista, setUrlImagen] = useState('');


    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        const itemList = {tituloLista, descripcionLista, imagenLista};
        props.setPlaylist((prevPlaylist)=>[...prevPlaylist, itemList]);
        
        
        setTitulo('');
        setDescripcion('');
        setUrlImagen('');
    }

    function handleChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitulo(event.target.value);
    }

    function handleChangeDescription(event: ChangeEvent<HTMLInputElement>){
        setDescripcion(event.target.value);
    }
    function handleChangeImg(event: ChangeEvent<HTMLInputElement>){
        setUrlImagen(event.target.value);
    }




    return(
        <>
        <h1>Creá tu Playlist</h1>
        <form onSubmit={handleSubmit} >
            <label htmlFor="tituloLista">Título</label>
            <input id="tituloLista" type="text" value={tituloLista} onChange={handleChangeTitle} />
            <label htmlFor="descripcionLista">Descripción</label>
            <input id="descripcionLista" type="text" value={descripcionLista} onChange={handleChangeDescription} />
            <label htmlFor="imagenLista">Imagen</label>
            <input id="imagenLista" type="text" value={imagenLista} onChange={handleChangeImg} />
            <button type="submit">Crear Playlist</button>

        </form>

        <div>
            <AlbumCard title={tituloLista} cover={imagenLista} description={descripcionLista}/>
        </div>
        </>
    )
}