import React from 'react';
import '../App';
import Header from './Header';
import Footer from './Footer';
import UncontrolledExample from './Carrusel';
import Certificados from './Certificado';
import Stack from './Stack';

function Home() {
    return (
        <div>
            <Header className="sticky-top">

            </Header>
            <div className="App">
                <div className="Cuerpo">
                    <UncontrolledExample >

                    </UncontrolledExample>

                    <Certificados>

                    </Certificados>
                    <Stack>

                    </Stack>
                </div>
            </div>
            <Footer>

            </Footer>
        </div>
    )
}

export default Home