import React from 'react';
import './App.css';
import Header from './Componentes/Header';
import Datos from './Componentes/Datos';
import Imagen2 from "./Images/dibujo.jpg"
import Footer from './Componentes/Footer';
import UncontrolledExample from './Componentes/Carrusel';
import Certificados from './Componentes/Certificado';
import Stack from './Componentes/Stack';

function App() {
  return (
    <div className="App">
      <Header>

      </Header>
      <div className="Cuerpo">
        <UncontrolledExample >

        </UncontrolledExample>
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
        <Certificados>
          
        </Certificados>
        <Stack>
          
        </Stack>
      </div>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
