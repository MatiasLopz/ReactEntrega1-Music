import ContentMusic from "./components/Content";
import Header from "./components/Header";
import PlaybackBar from "./components/PlaybackBar";
import SideBarYM from "./components/SideBar";

function App() {

  return (
    <>
      <Header />
      
      <div className="container">
        <div className="row">
          <div className="col-2">
          <SideBarYM />
          </div>
          <div className="col-10">
          <ContentMusic/>
          </div>



        </div>

      </div>

      <PlaybackBar/>
    </>
    

  )
}

export default App;

