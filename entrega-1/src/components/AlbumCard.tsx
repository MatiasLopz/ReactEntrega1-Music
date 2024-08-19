const ALBUMS = [
    {
        title : 'Close To The Edge',
        artist: 'Yes',
        followers: '12M',
        cover: 'https://upload.wikimedia.org/wikipedia/en/0/09/Yes-close.jpg',
    },

    {
        title:'Tarkus',
        artist:'Emerson Lake & Palmer',
        followers:'5M',
        cover:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTYy9Jm0skFKKMzofRMeJSzuZW0Trqum1Px1WY4ryAXBmdQMqM3N-tmQB5xLxZLzWq9JiriYtV-5gn5ZPW2I9un8al_i-H7WtgmRKZR2UcmdXOi-DGrre4G85vDh44VXHXPC9Ir7-JBQ/s1600/Emerson,_Lake_y_Palmer-Tarkus-Frontal.jpg',
    },

    {
        title:'Drunk',
        artist:'Thundercat',
        followers:'50M',
        cover:'https://t2.genius.com/unsafe/853x0/https%3A%2F%2Fimages.genius.com%2F466b18a3762737c2a3454406b02f22d4.1000x1000x1.jpg',
    },
    
    {
        title:'nothing',
        artist:'Louis Cole',
        followers:'6M',
        cover:'https://f4.bcbits.com/img/a0191701430_10.jpg',
    },
    
    {
        title:'La Pasion Continua',
        artist:'Los Continuados',
        followers:'100B',
        cover:'https://archive.org/services/img/los-continuados-la-pasion-continua-2002-209/full/pct:500/0/default.jpg',
    },
    
]
    
function AlbumCard (){
    const width = {width : 180, margin : 30}
    return(
        <>
        {ALBUMS.map((album) =>{
            return(
                <div className="album-card float-start card" style={width} >
                    <img src={album.cover} width={180} height={180} className="card-img-top"/>
                    <div className="card-body">
                        <h2 className="card-title">{album.title}</h2>
                        <p className="card-text">{album.artist} • {album.followers} Followers</p>
                    </div>
                </div>
            )
        })}

        </>
    )
}

export default AlbumCard;