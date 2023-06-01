
// import './index.css';
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
// import {BrowserRouter, Router,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
      {/* <BrowserRouter>
        <Router>
          <Routes path="" element=""/>
        </Router>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
