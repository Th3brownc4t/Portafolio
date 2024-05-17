import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Tyr from "../Images/Screenshot 2024-05-16 111137.png"
import Entrenamiento from "../Images/Entrenamiento.png"
import Cancat from "../Images/Cancat.png"
import Brunomars from "../Images/Brunomarcelo.mp4"
import PruebaPoli from "../Images/Prueba tecnica Politecnico.mp4"
import PruebaAvon from "../Images/Prueba practica.mp4"
import Poli3 from "../Images/Poli3.jpeg"
import Poli2 from "../Images/Poli2.jpeg"
import Poli1 from "../Images/Poli.jpeg"
import Rstk from "../Images/Camiseta-One-publicacion-3.jpg"
import Mockup from "../Images/Mockup-mio.jpg"
import "../Styles/Componentes.css"
import ReactPlayer from "react-player"
import { Link } from 'react-router-dom'
import Cards from './Cards'

function Portafolio() {
  return (
    <div>
      <Header>

      </Header>
      <div className='App'>
        <div className='Cuerpo'>
          <h2 className='mx-auto text-center Sobre mt-5'>Diseño gráfico</h2>
          <div>
            <div className='text-center'>
              <h3>Politécnico Grancolombiano</h3>
              <p>Durante mi estancia en el Politécnico Grancolombiano como asistente de comunicador externo realice piezas para la pagina web del Poli y sus redes sociales, algunas de estas son:</p>
              <div className='img-hover Imagenes d-flex flex-column align-items-center my-5'>
                <Link to="https://twitter.com/Poligran/status/1725128692832018911" target='_blank'>
                  <img src={Poli3} alt="" />
                </Link>
                <p className='text-secondary mt-2 fs-6'>Politécnico Grancolombiano</p>
              </div>
            </div>
            <div className='text-center'>
              <h3>Restocked</h3>
              <p>Al día de hoy sigo trabajando con la emprea Restocked realizando piezas para web, videos y edición de estos y mucho más, algunos de estos son:</p>
              <div className='img-hover Imagenes d-flex flex-column align-items-center my-5'>
                <Link to="https://www.instagram.com/p/C56y9V_pHvy/?hl=es" target='_blank'>
                  <img src={Rstk} alt=""/>
                </Link>
                <p className='text-secondary mt-2 fs-6'>Restocked 79</p>
              </div>
            </div>
            <div className='text-center'>
              <h3>Oni Kohi</h3>
              <p>Esto fue un pequeño proyecto de cafe japones realizado por un compañero y yo, en el cual se realizaron mockups, posters y una marca, los resultados fueron:</p>
              <div className='img-hover Imagenes d-flex flex-column align-items-center my-5'>
                <Link>
                  <img src={Mockup} alt="" />
                </Link>
                <p className='text-secondary mt-2 fs-6'>Oni Kohi</p>
              </div>
            </div>
          </div>
          <h2 className='mx-auto text-center Sobre mt-5'>Edición de videos y grabación</h2>
          <div className='Videos mt-5'>
            <div>
              <h3 className='text-center'>Politécnico Grancolombiano</h3>
              <ReactPlayer url={PruebaPoli} controls className="Video">

              </ReactPlayer>
            </div>
            <div>
              <h3 className='text-center'>Practica video musical</h3>
              <ReactPlayer url={Brunomars} controls className="Video">

              </ReactPlayer>
            </div>
            <div>
              <h3 className='text-center'>Prueba de Avon</h3>
              <ReactPlayer url={PruebaAvon} controls className="Video">
              </ReactPlayer>
            </div>
          </div>
          <h2 className='mx-auto text-center Sobre mt-5'>Front-end</h2>
          <div className='d-flex justify-content-center flex-wrap gap-4'>
            <Cards
            className="container-fluid"
              Nombre="Proyecto Tyr"
              Imagen={Tyr}
              Tecnologias1={<div className='d-flex justify-content-around mt-2'>
                <p>HTML 5</p>
                <p>Javascript</p>
              </div>}
              Tecnologias2={<div className='d-flex justify-content-around'>
                <p>Bootstrap</p>
              </div>}
              Git="https://github.com/Th3brownc4t/Tyr-bootstrap"
              Link="https://tyroficial.netlify.app"
            />
            <Cards
              Nombre="Entrenamiento 1"
              Imagen={Cancat}
              Tecnologias1={<div className='d-flex justify-content-around mt-2'>
                <p>HTML 5</p>
                <p>CSS</p>
              </div>}
              Tecnologias2={<div className='d-flex justify-content-around'>
                <p>Bootstrap</p>
              </div>}
              Git="https://github.com/Th3brownc4t/Cancat"
              Link="https://entrenamientocancat.netlify.app"
            />
            <Cards
              Nombre="Entrenamiento 2"
              Imagen={Entrenamiento}
              Tecnologias1={<div className='d-flex justify-content-around mt-2'>
                <p>HTML 5</p>
                <p>JavaScript</p>
              </div>}
              Tecnologias2={<div className='d-flex justify-content-around'>
                <p>Bootstrap</p>
              </div>}
              Git="https://github.com/Th3brownc4t/Entrenamiento"
              Link="https://practicadeiner1.netlify.app"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Portafolio