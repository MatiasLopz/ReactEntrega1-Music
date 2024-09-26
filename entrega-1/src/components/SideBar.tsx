import BtnNewPlaylist  from "./Buttons";
import SongCard from "./SongCard";
type Props ={
    toggleButton : React.Dispatch<React.SetStateAction<boolean>>;
    playlistPreview : {
        tituloLista: string;
        descripcionLista: string;
        imagenLista: string;
    }[];
};

export default function SideBarYM(props : Props){
    return(
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: 280 }}>
                <a  href="/"    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi me-2" width={40} height={32}>
                    <use xlinkHref="#bootstrap" />
                    </svg>
                    <span className="fs-4">HOME</span>
                </a>
            
                <hr />
            
                <BtnNewPlaylist toggleButton={props.toggleButton}/>
            </div>
            
            <div>
            
                {props.playlistPreview.map((item)=>{
                    return(
                        <SongCard title={item.tituloLista} 
                        cover={item.imagenLista}
                        artist={item.descripcionLista}/>
                    )
                })}
            </div>



        </>
    )
}

