function Header (){
    return(
    <>
        <nav className="navbar navbar-dark bg-dark container">

                <a className="navbar-brand" href="#">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.png"
                        width={80}
                        height={80}
                        className="d-inline-block align-top float-start"
                        alt=""
                    />
                    <h1 style={{margin : 10}}>Music</h1>
                </a>

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>



            
                <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" 
                width={120}
                height={75}
                className="d-inline-block align-top float-end"/>
            



        </nav>
    </>    
    );
}

export default Header;