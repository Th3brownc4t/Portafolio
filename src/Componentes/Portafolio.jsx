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
import Poli4 from "../Images/image4.png"
import Rstk from "../Images/Camiseta-One-publicacion-3.jpg"
import Rstk2 from "../Images/Camiseta-Three-5-publicacion.jpg"
import Rstk3 from "../Images/Camiseta-seven-publicacion.jpg"
import Mockup from "../Images/Mockup-mio.jpg"
import Mockup2 from "../Images/Vaso-Mokcup.jpg"
import Mockup3 from "../Images/Poster-1.jpg"
import "../Styles/Componentes.css"
import ReactPlayer from "react-player"
import { Link } from 'react-router-dom'
import Cards from './Cards'
import Carousel from 'react-bootstrap/Carousel';

function Portafolio() {
  return (
    <div>
      <Header>

      </Header>
      <div className='App'>
        <div className='Cuerpo'>
          <h2 className='mx-auto text-center fs-1 fw-bolder mb-3 mt-5'>Diseño gráfico</h2>
          <div>
            <div className='text-center'>
              <h3>Politécnico Grancolombiano</h3>
              <p>Durante mi estancia de 6 meses en el Politécnico Grancolombiano como asistente de comunicador externo, realicé piezas para la página web del Poli y sus redes sociales, algunas de estas son:</p>
              <Carousel className='mt-4 Carru-2 mx-auto'>
                <Carousel.Item interval={null}>
                  <img
                    className="d-block w-100 Carru"
                    src={Poli1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={null}>
                  <img
                    className="d-block w-100 Carru"
                    src={Poli2}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={null}>
                    <img
                      className="d-block w-100 Carru"
                      src={Poli3}
                      alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={null}>
                  <img
                    className="d-block w-100 Carru"
                    src={Poli4}
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel>
              <p className='text-secondary mt-2 fs-6'>Politécnico Grancolombiano</p>
            </div>
            <div className='text-center'>
              <h3>Restocked</h3>
              <p>Al día de hoy sigo trabajando con la empresa Restocked realizando piezas para web, videos y edición de estos y mucho más, algunos de estos son:</p>
              <Carousel className='mt-4 Carru-2 w-50 mx-auto'>
                <Carousel.Item interval={null}>
                  <img
                    className="d-block w-100 Carru"
                    src={Rstk}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={null}>
                  <img
                    className="d-block w-100 Carru"
                    src={Rstk2}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={null}>
                    <img
                      className="d-block w-100 Carru"
                      src={Rstk3}
                      alt="First slide"
                    />
                </Carousel.Item>
              </Carousel>
              <p className='text-secondary mt-2 fs-6'>Restocked 79</p>
            </div>
            <div className='text-center'>
              <h3>Oni Kohi</h3>
              <p>Esto fue un pequeño proyecto de café japonés realizado por un compañero y yo, en el cual se realizaron mockups, pósteres y una marca,  los resultados fueron:</p>
              <Carousel className='mt-4 Carru-2 w-50 mx-auto'>
                <Carousel.Item interval={null}>
                  <img
                    className="d-block w-100 Carru"
                    src={Mockup}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={null}>
                  <img
                    className="d-block w-100 Carru"
                    src={Mockup2}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={null}>
                    <img
                      className="d-block w-100 Carru"
                      src={Mockup3}
                      alt="First slide"
                    />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <h2 className='mx-auto text-center fs-1 fw-bolder mb-3 mt-5'>Edición de videos y grabación</h2>
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
          <h2 className='mx-auto text-center fs-1 fw-bolder mb-3 mt-5'>Front-end</h2>
          <div className='d-flex justify-content-center flex-wrap container-fluid gap-4'>
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
              className="container-fluid"
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
              className="container-fluid"
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