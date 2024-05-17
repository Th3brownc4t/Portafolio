import React from 'react'
import Logo from '../Images/Mesa de trabajo 5.png'
import "../Styles/Componentes.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <Navbar sticky="top" expand="lg" className='Header p-3 ps-5 pt-2'>
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
    /* <div className='Header p-4 ps-5'>
      <a href="#">
        <img src={Logo} className="" alt="logo" />
      </a>
      <div className='Menu'>
        <a href="#">INICIO</a>
        <a href="#">PORTAFOLIO</a>
        <a href="#">SOBRE MÍ</a>
      </div>
    </div> */
  )
}

export default Header;
