type Props = {
    cover : string;
    title : string;
    artist : string;
}

function SongCard (props: Props){
    const tamanio={
        width: "80px",
        height: "60px",
    };
    return(
        <>    
                <div className="song-card float-start">
                        <img src={props.cover} style={tamanio} className="col-3"/>
                        <div className="song-info col-9 " >
                            <h5>{props.title}</h5>
                            <p>{props.artist} • Listen Again</p>
                    </div>
                </div>
        </>
    )
}

export default SongCard;