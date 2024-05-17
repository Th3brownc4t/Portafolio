import React from 'react'
import "../Styles/Componentes.css"
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <div className='d-flex justify-content-center'>
            <div className='Cards pb-3'>
                <div className=''>
                    <h3 className='text-center my-2'>{props.Nombre}</h3>
                    <Link to={props.Link} target='_blank'>
                        <img className='Videito' src={props.Imagen} alt="" />
                    </Link>
                    {props.Tecnologias1}
                    {props.Tecnologias2}
                    <div className='d-flex justify-content-center gap-5 mt-4'>
                        <Link to={props.Git} target='_blank' className='img-hover Icono d-flex flex-column align-items-center text-decoration-none fw-bold' >
                            <i className="fa-brands fa-square-github"></i>
                        </Link>
                        <Link to={props.Link} target='_blank' className='img-hover Icono d-flex flex-column align-items-center text-decoration-none fw-bold' >
                            <i class="fa-solid fa-link"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card