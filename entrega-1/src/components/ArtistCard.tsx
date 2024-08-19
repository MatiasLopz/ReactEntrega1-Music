const ARTIST = [
    {
        cover :'https://www.rockaxis.com/img/newsList/8322466.jpg',
        name : 'Meshuggah',
        followers : '3M',
    },
    {
        cover :'https://indierocks.sfo3.digitaloceanspaces.com/wp-content/uploads/2021/08/Portada-Jamiroquai.jpg',
        name : 'Jamiroquai',
        followers : '55M',
    },
    {
        cover :'https://people.com/thmb/0AGnafx90VVyheLv3FWKXjN0xrM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x799:1001x801)/lady-gaga-2019-2000-ecde0348cd054105b8eeca7abdd2e8cb.jpg',
        name : 'Lady Gaga',
        followers : '100M',
    },
    {
        cover :'https://cdns-images.dzcdn.net/images/artist/eb32248f18afcd63b260fdbfc42bd06d/1900x1900-000000-80-0-0.jpg',
        name : 'Indio Solari',
        followers : '35M',
    },
    {
        cover :'https://s3.abcstatics.com/abc/www/multimedia/cultura/2023/04/13/Metallica-R-ReoHPlfXn08hieR7JXNNOLK-1200x840@abc.jpeg',
        name : 'Metallica',
        followers : '321M',
    },
]

function ArtistCard (){
    const estilo = {
        margin : 20,
    }
    return(
        <>
        {ARTIST.map((artist) => {
            return(
                <div className="artist-card float-start" style={estilo}>
                    <img src={artist.cover} width={200} height={200} style={{borderRadius : 250,}}/>
                    <h2>{artist.name}</h2>
                    <p>{artist.followers} Followers</p>
                </div>
            )}   
        )},
            
        </>
    )
}

export default ArtistCard;