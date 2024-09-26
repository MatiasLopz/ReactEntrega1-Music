//agregar luego navegación de secciones, reproductor.

type Props ={
    toggleButton : React.Dispatch<React.SetStateAction<boolean>>,
};



export default function BtnNewPlaylist(props : Props){
    function handleClick(){
            props.toggleButton(true); 
    }


    return (<button onClick={handleClick}>CREAR PLAYLIST</button>)
    
    
}

