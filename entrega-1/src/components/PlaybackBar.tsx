

function PlaybackButtons(){
    return(
        <>
        <p>
        <a href="#"><img src="https://images2.imgbox.com/92/9f/dS2MnAy5_o.png" alt="Previous" /></a>
        <a href="#"><img src="https://images2.imgbox.com/df/cc/v6OqPTZp_o.png" alt="Play" /></a>
        <a href="#"><img src="https://images2.imgbox.com/c0/fd/xymqnuc1_o.png" alt="Next" /></a>
        0:55/18:39</p>
        </>
    )
}

function PlaySongCard(){
    return(
        <>
        <div className="row">
            <img src="https://upload.wikimedia.org/wikipedia/en/0/09/Yes-close.jpg" width={70} height={70} className="col-3"/>
            <div className="song-info col-9" >
                            <h5>Close to the Edge</h5>
                            <p>Yes • 4M views • 37k likes</p>
            </div>
        </div>
        </>
    )
}

function LikeButton(){
    return(
        <p>
            <a href="#"><img src="" alt="like" /></a>
            <a href="#"><img src="" alt="dislike" /></a>
        </p>
    )
}


function PlaybackBar(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <PlaybackButtons/>
                </div>
                
                <div className="col-6">
                    <PlaySongCard/>
                    <LikeButton />
                </div>

                        


                

                <div className="pb-right">

                </div>

            </div>
        </div>
        </>

    )
}

export default PlaybackBar;

