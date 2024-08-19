import { ReactNode } from "react";

type PropSec = {
    secSupTitle: string;
    sectionTitle: string;
    nav: ReactNode;
    children: ReactNode;
};

function Sections ({secSupTitle='SuperiorText', sectionTitle='TITULO', nav='Acá irían los botones', children='acá va el hijo'}:PropSec){
    const marpad = {
        margin : 0,
        padding : 0,
        }

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
                    <div className="section-nav col-3 float-end">{nav}</div>
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