import React from 'react'
import Logo from '../Images/Mesa de trabajo 6.png'
import '../Styles/Componentes.css'


const Footer = () => {
    return (
        <div className='Footer'>
            <a href="">
            <img src={Logo} alt="Logo" />
            </a>
            <div className='Logos'>
                <a href="https://www.linkedin.com/in/deiner-perez-a67861285/" className='d-flex flex-column align-items-center text-decoration-none text-white fw-bold'>
                <p>LinkedIn</p>
                <i className="fa-brands fa-linkedin Logo" ></i>
                </a>
                <a href="https://github.com/Th3brownc4t" className='d-flex flex-column align-items-center text-decoration-none text-white fw-bold' >
                <p>LinkedIn</p>
                <i className="fa-brands fa-square-github Logo"></i>
                </a>
                <a href="https://www.behance.net/deinerperez4" className='d-flex flex-column align-items-center text-decoration-none text-white fw-bold'>
                <p>LinkedIn</p>
                <i className="fa-brands fa-square-behance Logo"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer