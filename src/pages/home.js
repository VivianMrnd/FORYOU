import c1 from "../assets/IMG-7192.PNG";
import c2 from "../assets/sun.JPG";
import c3 from "../assets/kyot.jpg";
import c4 from "../assets/IMG-4334.JPG";

const Home = () =>{
    return(
        <div className="home container">
            <section  id="home" className="mainheader" style={{minHeight:"60vh"}}>
                <div class="patterns">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="polka-dots" x="0" y="0" width="100" height="100"
                                    patternUnits="userSpaceOnUse">
                                <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                            </pattern>  
                            <style>
                            </style>
                        
                        </defs>
                                    
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>
                        
                        <text x="50%" y="50%"  text-anchor="middle"  >
                            Happy Monthsary baby!
                        </text>
                    </svg>
                </div>
            </section>
            <section  id="compilation" className="compilation">
                <div className="row compilation pt-5 pb-5 m-0">
                    <div className="col-6 text-center mb-5" >
                        <img src={c1} class=" w-25 card-img-top" alt="compilation"/>
                    </div>
                    <div className="col-6 message text-center mb-5 bg-secondary text-light" >
                        <h3>Hindi ako nagphophone sa work pero wala e, dumating ka sa buhay ko</h3>
                    </div>
                    <div className="col-6 message text-center mb-5 bg-warning text-light">
                        <h3>Ang saya saya ko with you so kapag hindi kita kasama or nakausap for just a day nanghihina ako &#128542;</h3>
                    </div>
                    <div className="col-6 text-center mb-5">
                        <img src={c2} class=" w-25 card-img-top" alt="compilation"/>
                    </div>
                    <div className="col-6 text-center mb-5">
                        <img src={c3} class=" w-25 card-img-top" alt="compilation"/>
                    </div>
                    <div className="col-6 message text-center mb-5 bg-success text-light">
                        <h3>I love seeing you enjoy simple stuff hehe, sana laging ganyan </h3>
                    </div>
                    <div className="col-6 message text-center mb-5 bg-info text-light">
                        <h3>Tama na drama baby ayoko maiyak hmp...</h3>
                    </div>
                    <div className="col-6 text-center mb-5">
                        <img src={c4} class=" w-50 card-img-top" alt="compilation"/>
                    </div>
                </div>
            </section>

        </div>
    )

}

export default Home;