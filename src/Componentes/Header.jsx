import React from 'react'
import Logo from '../Images/Mesa de trabajo 5.png'
import "../Styles/Componentes.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

window.addEventListener("scroll", function () {
  menu();
})

let Ubicacion = window.scrollY;

function menu() {
  let desplazamientoActual = window.scrollY;
  if (Ubicacion >= desplazamientoActual) {
    document.getElementById("Header").style.top = "0";
  } else {
    document.getElementById("Header").style.top = "-100px"
  }
  console.log(window.pageYOffset);
  /* console.log(desplazamientoActual); */
  Ubicacion =  desplazamientoActual;
}



const Header = () => {
  return (
    <div>
      <Navbar expand="lg" id='Header' className='Header p-3 ps-5 pt-2'>
        <div>
          <Navbar.Brand>
            <Link to="/">
            <img src={Logo} className="Loguito" alt="logo" />
            </Link>
          </Navbar.Brand>
        </div>
        <div className='Hambur'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='Centro' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto Menu">
              <Link to="/">INICIO</Link>
              <Link to="/Portafolio">PORTAFOLIO</Link>
              <Link to="/Sobremi">SOBRE MÍ</Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default Header;
