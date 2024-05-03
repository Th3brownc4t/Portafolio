import Carousel from 'react-bootstrap/Carousel';
import '../Styles/Componentes.css';
import Deiner from "../Images/Deiner.jpg"
import Tyrion from "../Images/Tyr-juego.jpg"
import { Col, Container } from 'react-bootstrap';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className='mt-4 Carru mx-auto'>
      <Carousel.Item>
        <a href="https://presented-policies.000webhostapp.com" target="_blank">
        <img
          className="d-block w-100 Carru"
          src={Tyrion}
          alt="First slide"
        />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="">
      <img
          className="d-block w-100 Carru"
          src={Deiner}
          alt="First slide"
        />
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;