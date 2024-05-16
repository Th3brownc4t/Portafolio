import Carousel from 'react-bootstrap/Carousel';
import '../Styles/Componentes.css';
import Deiner from "../Images/Deiner.jpg"
import Tyrion from "../Images/Tyr-juego.jpg"
import { Link } from 'react-router-dom';

const Tyr = "https://tyroficial.netlify.app"


function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className='mt-4 Carru mx-auto'>
      <Carousel.Item>
        <Link to={Tyr}target="_blank">
        <img
          className="d-block w-100 Carru"
          src={Tyrion}
          alt="First slide"
        />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/Portafolio">
      <img
          className="d-block w-100 Carru"
          src={Deiner}
          alt="First slide"
        />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;