import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Poli from "../Images/Poli.jpeg"
import Poli2 from "../Images/Poli2.jpeg"
import Tyr from "../Images/Screenshot 2024-05-16 111137.png"
import Brunomars from "../Images/Brunomarcelo.mp4"
import PruebaPoli from "../Images/Prueba tecnica Politecnico.mp4"
import PruebaAvon from "../Images/Prueba practica.mp4"
import Poli3 from "../Images/Poli3.jpeg"
import Rstk from "../Images/Camiseta-One-publicacion-3.jpg"
import Mockup from "../Images/Mockup-mio.jpg"
import "../Styles/Componentes.css"
import ReactPlayer from "react-player"
import { Link } from 'react-router-dom'

function Portafolio() {
  return (
    <div>
      <Header>

      </Header>
      <div className='App'>
        <div className='Cuerpo'>
          <h2 className='mx-auto d-flex justify-content-center Sobre mt-5'>Diseño gráfico</h2>
          <div>
            <div className='text-center'>
              <h3>Politécnico Grancolombiano</h3>
              <p>Durante mi estancia en el Politécnico Grancolombiano como asistente de comunicador externo realice piezas para la pagina web del Poli y sus redes sociales, algunas de estas son:</p>
              <div className='Imagenes d-flex flex-column align-items-center my-5'>
                <Link to="https://twitter.com/Poligran/status/1725128692832018911" target='_blank'>
                  <img src={Poli3} alt="" />
                </Link>
                <p className='text-secondary mt-2 fs-6'>Politécnico Grancolombiano</p>
              </div>
            </div>
            <div className='text-center'>
              <h3>Restocked</h3>
              <p>Al día de hoy sigo trabajando con la emprea Restocked realizando piezas para web, videos y edición de estos y mucho más, algunos de estos son:</p>
              <div className='Imagenes d-flex flex-column align-items-center my-5'>
                <Link to="https://www.instagram.com/p/C56y9V_pHvy/?hl=es" target='_blank'>
                  <img src={Rstk} alt="" />
                </Link>
                <p className='text-secondary mt-2 fs-6'>Restocked 79</p>
              </div>
            </div>
            <div className='text-center'>
              <h3>Oni Kohi</h3>
              <p>Esto fue un pequeño proyecto de cafe japones realizado por un compañero y yo, en el cual se realizaron mockups, posters y una marca, los resultados fueron:</p>
              <div className='Imagenes d-flex flex-column align-items-center my-5'>
                <Link>
                  <img src={Mockup} alt="" />
                </Link>
                <p className='text-secondary mt-2 fs-6'>Oni Kohi</p>
              </div>
            </div>
          </div>
          <h2 className='mx-auto d-flex justify-content-center Sobre mt-5'>Edición de videos y grabación</h2>
          <div className='Videos mt-5'>
            <div>
              <h3 className='text-center'>Politécnico Grancolombiano</h3>
              <ReactPlayer url={PruebaPoli} controls>

              </ReactPlayer>

            </div>
            <div>
              <h3 className='text-center'>Practica video musical</h3>
              <ReactPlayer url={Brunomars} controls>

              </ReactPlayer>

            </div>
            <div>
              <h3 className='text-center'>Prueba de Avon</h3>
              <ReactPlayer url={PruebaAvon} controls>

              </ReactPlayer>

            </div>
          </div>
          <h2 className='mx-auto d-flex justify-content-center Sobre mt-5'>Front-end</h2>
          <div className='d-flex justify-content-center'>
            <div className='Cards'>
              <h3 className='text-center'>Proyecto Tyr</h3>
              <img className='Videito' src={Tyr} alt="" />
              <div className='d-flex justify-content-around'>
                <p>HTML 5</p>
                <p>JavaScript</p>
              </div>
              <p className='text-center'>Bootstrap</p>
              <div className='d-flex justify-content-center gap-5 mt-4'>
                <Link to="https://github.com/Th3brownc4t/Tyr-bootstrap" target='_blank' className='Github d-flex flex-column align-items-center text-decoration-none text-black fw-bold' >
                  <i className="fa-brands fa-square-github"></i>
                </Link>
                <Link to="https://tyroficial.netlify.appt" target='_blank' className='Github d-flex flex-column align-items-center text-decoration-none text-black fw-bold' >
                  <i class="fa-solid fa-link"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Portafolio