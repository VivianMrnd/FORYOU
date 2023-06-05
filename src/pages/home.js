import c1 from "../assets/IMG-7192.PNG";
import c2 from "../assets/sun.JPG";
import c3 from "../assets/kyot.jpg";
import c4 from "../assets/IMG-4334.JPG";
import a1 from "../assets/fav.jpg";
import wws1 from "../assets/IMG-6871.jpg";
import wws2 from "../assets/IMG-6873.jpg";
import wws3 from "../assets/IMG-4971.JPG";
import wws4 from "../assets/IMG-7204.JPG";
import wws5 from "../assets/IMG-7203.JPG";
import wws6 from "../assets/IMG-7206.JPG";
 
const Home = () =>{
    return(
        <div className="home container">
            <section  id="home" className="mainheader" style={{minHeight:"60vh"}}>
                <div className="patterns">
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
                        
                        <text className="hmb" x="50%" y="50%"  text-anchor="middle"  >
                            Happy Monthsary baby!
                        </text>
                    </svg>
                </div>
            </section>
            <section  id="compilation" className="compilation">
                <div className="row compilation pt-5 pb-5 m-0">
                    <div className="col-6 text-center mb-5" >
                        <img src={c1} className=" w-50 card-img-top" alt="compilation"/>
                    </div>
                    <div className="p-3 col-6 message text-center mb-5 bg-secondary text-light" >
                        <h3>Wala akong maisip na design kase hindi ako web designer, basta love kita</h3>
                    </div>
                    <div className="p-3 col-6 message text-center mb-5 bg-warning text-light">
                        <h3>Baby wala akong maisip na text hindi kasi ako pinalaki ng nanay ko na madrama, ang alam ko lang, I love you from the mo. from 
                            the moment I saw you trying to go over the wall </h3>
                            {/* &#128542; */}
                    </div>
                    <div className="col-6 text-center mb-5">
                        <img src={c2} className=" w-50 card-img-top" alt="compilation"/>
                    </div>
                    <div className="col-6 text-center mb-5">
                        <img src={c3} className=" w-50 card-img-top" alt="compilation"/>
                    </div>
                    <div className="p-3 col-6 message text-center mb-5 bg-success text-light">
                        <h3>I love seeing you enjoy simple stuff hehe, sana laging ganyan </h3>
                    </div>
                    <div className="p-3 col-6 message text-center mb-5 bg-info text-light">
                        <h3>Tama na baby ang hirap magisip ganon talaga pag bobo...</h3>
                    </div>
                    <div className="col-6 text-center mb-5">
                        <img src={c4} className=" w-50 card-img-top" alt="compilation"/>
                    </div>
                </div>
            </section>
            <section  id="aboutyou" className="aboutyou pb-5">
                <h4>WHAT I KNOW ABOUT YOU...</h4>
                <div className="row aboutyou">
                    <div className=" textaboutyou col-12 col-lg-6 col-md-6">
                        Bianky is.... <br/><br/>

                        A high level of attention to detail,
                        Ability to work effectively within a team and independently,
                        Experience using computers for a variety of tasks,
                        Competency in Microsoft applications including Word, Excel, and Outlook.
                        Good organization skills.
                        Related job and internship experience.
                        Strong analytical and planning skills.
                        Good communication and presentation skills.
                        Excellent problem-solving skills.

                        <br/> <br/>
                        charot haha, maarte ka tas masungit tas parang mapride 
                        pero I think you're thoughtful and loyal and caring and pogi and I never
                        thought that I'll love you this fast.

                        <br/> <br/>
                        Mahal kita my itlog.
                    </div>
                    <div className=" text-center col-12 col-lg-6 col-md-6">
                        <img src={a1} className=" w-50 card-img-top" alt="compilation"/>
                    </div>
                </div>
            </section>
            {/* <section  id="whatweshared" className="whatweshared pb-5">
                <div id="carouselExampleIndicators" className="wwscarousel carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={wws1} className=" " alt="..."/>
                        </div>
                        <div class="carousel-item ">
                            <img src={wws2} className=" " alt="..."/>
                        </div>
                        <div class="carousel-item ">
                            <img src={wws3} className="" alt="..."/>
                        </div>
                        <div class="carousel-item ">
                            <img src={wws4} className="" alt="..."/>
                        </div>
                        <div class="carousel-item ">
                            <img src={wws5} className="" alt="..."/>
                        </div>
                        <div class="carousel-item ">
                            <img src={wws6} className="" alt="..."/>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section> */}
        </div>
    )

}

export default Home;