import React from 'react'
import Logo from '../Images/Mesa de trabajo 6.png'
import '../Styles/Componentes.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='Footer'>
            <Link to="/" className='Loguito'>
                <img src={Logo} alt="Logo" />
            </Link>
            <div className='Logos'>
                <Link to="https://www.linkedin.com/in/deiner-perez-a67861285/" target='_blank' className='Loguito d-flex flex-column align-items-center text-decoration-none text-white fw-bold'>
                    <i className="fa-brands fa-linkedin" ></i>
                    <p className='fs-5'>LinkedIn</p>
                </Link>
                <Link to="https://github.com/Th3brownc4t" target='_blank' className='Loguito d-flex flex-column align-items-center text-decoration-none text-white fw-bold' >
                    <i className="fa-brands fa-square-github"></i>
                    <p className='fs-5'>Github</p>
                </Link>
                <Link to="https://www.behance.net/deinerperez4" target='_blank' className='Loguito d-flex flex-column align-items-center text-decoration-none text-white fw-bold'>
                    <i className="fa-brands fa-square-behance"></i>
                    <p className='fs-5'>Behance</p>
                </Link>
            </div>
        </div>
    )
}

export default Footer