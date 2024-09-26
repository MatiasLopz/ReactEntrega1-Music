import { useState } from "react";
import ContentMusic from "./components/Content";
import Header from "./components/Header";
import PlaybackBar from "./components/PlaybackBar";
import  CrearPlaylist from "./components/Playlist";
import SideBarYM from "./components/SideBar";


type itemPlayList = {
  tituloLista: string;
  descripcionLista: string;
  imagenLista: string;
}

function App() {
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false)
  const [playlist, setPlaylist] = useState<itemPlayList[]>([]);
  

  return (
    <>
      <Header />
      
      <div className="container">
        <div className="row">
          <div className="col-3">
          <SideBarYM toggleButton={setIsPlaylistOpen} playlistPreview={playlist} />
          </div>
          <div className="col-9">
          
          {
            isPlaylistOpen ? <CrearPlaylist setPlaylist={setPlaylist} /> : <ContentMusic/>
          }       
          </div>
        </div>
      </div>

      <PlaybackBar/>
    </>
    

  )
}

export default App;

