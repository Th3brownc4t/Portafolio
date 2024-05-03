import React from 'react'
import "../Styles/Componentes.css";

const Datos = (props) => {
    return (
        <div>
            <span className='Separador Arriba'/>
            <div className="Datos">
                <h3 className='Nombre'>{props.nombre}</h3>
                <h4>{props.resultado}</h4>
            </div>
            <span className='Separador'/>
        </div>
    )
}

export default Datos