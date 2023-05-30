import c1 from "../assets/IMG_0 (5).MOV"
const Home = () =>{
    return(
        <div className="home container">
            <section  id="home" className="mainheader" style={{minHeight:"60vh", paddingTop:"120px"}}>
                <h2 className="headertext">HAPPY 1ST MONTHSARY BABY,</h2>
                <h6 className="headertext">I love you, kung di moko love</h6>
                <h5 className="headertext">edi putangina mo &#10084;...</h5>
            </section>
            <section  id="compilation" className="compilation" style={{minHeight:"100vh", paddingTop:"20px"}}>
                <div className="row m-0 p-0">
                    <div className="col-6">
                        <video style={{width: "100%", height: "50%"}} src={c1} className="card-img-top" controls autoPlay loop  muted alt="compilation"> </video>                               
                    </div>
                    <div className="col-6 ">
                        <h4 className=" textcompilation">Remember this night? ge alalahanin mo HAHAHAHAA</h4>
                    </div>
                </div>
            </section>

        </div>
    )

}

export default Home;