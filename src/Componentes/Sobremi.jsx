import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Datos from './Datos';
import Imagen2 from "../Images/dibujo.jpg"
import "../Styles/Componentes.css"

function Sobremi() {
    return (
        <div>
            <Header></Header>
            <div className="App">
                <div className='Cuerpo'>
                    <h2 className='Sobre mt-5'>Sobre mí</h2>
                    <div className='Sobremi'>
                        <div className='Letras'>
                            <p className='mb-3'>Mi nombre es Deiner Smith Perez Ayala, soy una persona productiva y que sabe aprovechar el tiempo sin importar el lugar. Me considero una persona bastante activa en el ámbito multimedia y con grandes conocimientos de este y que busca cada día aprender más y sobresalir de los demás. Una de mis muchas pasiones son los videojuegos y el desarrollo de estos, más que todo el arte conceptual y el diseño de este.
                            </p>
                            <div>
                                <Datos
                                    nombre="Nombre"
                                    resultado='Deiner Smith Perez Ayala' />
                                <Datos
                                    nombre="Email"
                                    resultado='deinerpa123@gmail.com' />
                                <Datos
                                    nombre="Telefono"
                                    resultado='(+57) 3332250578' />
                            </div>
                        </div>
                        <img src={Imagen2} className="Deiner" alt="Deiner" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Sobremi