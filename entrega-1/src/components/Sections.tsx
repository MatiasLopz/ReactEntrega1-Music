import { ReactNode } from "react";

type PropSec = {
    secSupTitle: string;
    sectionTitle: string;
    children: ReactNode;
};

function Sections ({secSupTitle='SuperiorText', sectionTitle='TITULO', children='acá va el hijo'}:PropSec){

        return(
        <div className="section container">
            <div className="row" >
            <div className="col-12">
                    
                        <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" 
                        width={48} className="col-1 float-start"/>

                    <div className="section-title col-8">
                        <p >{secSupTitle}</p>
                        <h2 >{sectionTitle}</h2>
                    </div>
                </div>

            </div>

            <div className="row">
                
                <div className="section-chi">{children}</div>
                <br />
            </div>

        </div>

    );   
}

export default Sections;