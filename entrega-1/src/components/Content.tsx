import Sections from "./Sections";
import AlbumCard from "./AlbumCard";
import ArtistCard from "./ArtistCard";
import SongCard from "./SongCard";

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
        title:'Drunk ',
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

const SONGS = [
    {
        cover:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiW-XvU-mQbcqb9pUO0BPlbAxc2gA4U7ltGg&s',
        title:'Ride The Lightning',
        artist:'Metallica',
    },
    {
        cover:'https://m.media-amazon.com/images/I/81TzX82CVvS._UF894,1000_QL80_.jpg',
        title:'Eruption',
        artist:'Focus',
    },    {
        cover:'https://www.evanescence.com/wp-content/uploads/2016/09/EV5_FALLEN_1200X1200.jpg',
        title:'Bring me to Life',
        artist:'Evanescense',
    },    {
        cover:'https://i.discogs.com/z_YHZBpquLdIR7zWI35-PDlcJ8A8_oeAD-O3ppKWa64/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc3NjA4/NDYtMTQ0ODIxODQ4/OS0yMDE5LmpwZWc.jpeg',
        title:'Bocanada',
        artist:'Gustavo Cerati',
    },    {
        cover:'https://www.cmtv.com.ar/tapas-cd/charlycomoconseguirchicas.webp',
        title:'Fanky',
        artist:'Charly García',
    },    {
        cover:'https://i1.sndcdn.com/artworks-000222615258-excj3c-t500x500.jpg',
        title:'Sex Machine',
        artist:'James Brown',
    },    {
        cover:'https://m.media-amazon.com/images/I/61yiDfKmiHL._UF1000,1000_QL80_.jpg',
        title:'Get Down on It',
        artist:'Kool and the Gang',
    },    {
        cover:'https://http2.mlstatic.com/D_NQ_NP_863932-MLM50061635470_052022-O.webp',
        title:'HUMBLE.',
        artist:'Kendrick Lamar',
    },    {
        cover:'https://s.songswave.com/album-images/vol1018/921/921728/2782225-big/Caribe-cover.jpg',
        title:'Caribe',
        artist:'Michel Camilo',
    },    {
        cover:'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/4f/be/b6/4fbeb69a-2bee-cb2b-9cae-5fb898e2c38b/dj.lhjoszyy.jpg/600x600bf-60.jpg',
        title:'Cumbia and Jazz Fusion',
        artist:'Charles Mingus',
    },    {
        cover:'https://dgmono.com/wp-content/uploads/2018/05/BLP-1577-W63-1-1000x1000.jpg',
        title:'John Coltrane',
        artist:'Lazy Bird',
    },    {
        cover:'https://f4.bcbits.com/img/a3612735723_10.jpg',
        title:'Monumento',
        artist:'NAFTA',
    },    {
        cover:'https://i.ytimg.com/vi/lm9hf2IydSc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBFrvWCfP6EsCzf-uN4UwQAlgQpEg',
        title:'Chetomaj7',
        artist:'Crema',
    },    {
        cover:'https://indiehoy.com/wp-content/uploads/2018/08/bandalos-chinos-bach.jpg',
        title:'Vamonos de Viaje',
        artist:'Bandalos Chinos',
    },    {
        cover:'https://i.scdn.co/image/ab67616d0000b273276951ece2a5c1deb005620b',
        title:'Ahora te vas',
        artist:'La Nueva Luna',
    },    {
        cover:'https://i.discogs.com/sRW7ISVUhlQWUVENFUIzhpagAfEZX1JImUusz2n4glc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMzM3/NzYwLTE1NTIzMjkx/MzItNjgzNC5qcGVn.jpeg',
        title:'Suave',
        artist:'Luis Miguel',
    },
]




function ContentMusic(){
    return(
        <>
            <Sections secSupTitle="Usuario" sectionTitle="Listen Again">
                {ALBUMS.map((album)=>{
                    return <AlbumCard cover={album.cover} title={album.title} artist={album.artist}
                    followers={album.followers}></AlbumCard>
                })}
                

            </Sections>        
            <br />
            <Sections secSupTitle="Similar to" sectionTitle="Ricky Maravilla">
                <ArtistCard/>
            </Sections>
            <br />
            <Sections secSupTitle="Start Radio from a Song" sectionTitle="Quick Picks">
                {SONGS.map((song)=>{
                    return(
                        <div className="col-12">
                            <div className="row">
                                <SongCard title={song.title} 
                                cover={song.cover} 
                                artist={song.artist} />
                            </div>
                        </div>
                    )
                })}
                
            </Sections>
            <br />
            <Sections secSupTitle="" sectionTitle="Recommended Albums">
            {ALBUMS.map((album)=>{
                    return <AlbumCard cover={album.cover} title={album.title} artist={album.artist}
                    followers={album.followers}></AlbumCard>
                })}
            </Sections>
            <br />
        </>
    );
}

export default ContentMusic