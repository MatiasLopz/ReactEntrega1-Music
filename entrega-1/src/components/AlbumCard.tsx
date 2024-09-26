type Props = {
    cover : string;
    title : string;
    artist?: string;
    followers?: string;
    description?: string;
}

function AlbumCard (prop : Props){
    const width = {width : 180, margin : 20,}
    return(
        <>
                <div className="album-card float-start card" style={width} >
                    <img src={prop.cover} width={180} height={180} className="card-img-top"/>
                    <div className="card-body">
                        <h2 className="card-title">{prop.title}</h2>
                        {(prop.followers && prop.artist) && <p className="card-text">{prop.artist} • {prop.followers} Followers</p>}
                        {prop.description && <p className="card-description">{prop.description}</p>}
                    </div>
                </div>
        </>
    )
}

export default AlbumCard;