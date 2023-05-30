import logo from "../assets/logo-t.png"
const Nav = ()=>{
    return(
        <div className="nav bg-dark " >
           <nav className="navbar navbar-expand-lg">
                <div className=" container-fluid">
                    <a className=" text-center navbar-brand" href="#">
                        <img src={logo} alt="logo" style={{width: "40%"}}/>
                    </a>
                    <button className="w-100 bg-white navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className=" navbar-nav ">
                        <a className="mx-3 text-light nav-link" href="#">Home</a>
                        <a className="mx-3 text-light nav-link" href="#">Compilation</a>
                        <a className="mx-3 text-light nav-link" href="#">Cute Section</a>
                        <a className="mx-3 text-light nav-link" href="#">What we shared</a>
                        <a className="mx-3 text-light nav-link" href="#">Meme Section</a>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;