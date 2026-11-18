import './Styles/style.css';

import Footer from './Components/Footer.jsx';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Events from './Pages/Events.jsx';
import Services from './Pages/Services.jsx';
import Register from './Pages/Register.jsx';
import Contactus from './Pages/Contactus.jsx';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className='about-container'>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path ="/" excat Component={Home}></Route>
          <Route path ="/Events" excat Component={Events}></Route>
          <Route path ="/Services" excat Component={Services}></Route>
          <Route path ="/Register" excat Component={Register}></Route>
          <Route path ="/About" excat Component={About}></Route>
          <Route path ="/Contactus" excat Component={Contactus}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
