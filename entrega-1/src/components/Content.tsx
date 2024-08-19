import Sections from "./Sections";
import AlbumCard from "./AlbumCard";
import ArtistCard from "./ArtistCard";
import SongCard from "./SongCard";

function ContentMusic(){
    return(
        <>
            <Sections secSupTitle="Usuario" sectionTitle="Listen Again">
                <AlbumCard></AlbumCard>
            </Sections>        
            <br />
            <Sections secSupTitle="Similar to" sectionTitle="Ricky Maravilla">
                <ArtistCard/>
            </Sections>
            <br />
            <Sections secSupTitle="Start Radio from a Song" sectionTitle="Quick Picks">
                <SongCard></SongCard>
            </Sections>
            <br />
            <Sections secSupTitle="" sectionTitle="Recommended Albums">
                <AlbumCard></AlbumCard>
            </Sections>
            <br />
        </>
    );
}

export default ContentMusic