import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calidad from "../Images/calidad.png"

function Certificados() {
    return (
        <div className='mt-5'>
            <h2 className='mx-auto d-flex justify-content-center'>Certificados</h2>
            <Container fluid className='mt-5'>
                <Row className='gap-4 mb-4'>
                    <Col className='d-flex Certi'>
                    <img src={Calidad} className='Certificado' alt="" />
                    <h4>TECNÓLOGO EN PRODUCCION DE MULTIMEDIA</h4>
                    </Col>
                    <Col className='d-flex Certi'>
                    <img src={Calidad} className='Certificado' alt="" />
                    <h4>COMPLEMENTARIA VIRTUAL EN ENGLISH DOT WORKS 4 (INGLES)</h4>
                    </Col>
                    <Col className='d-flex Certi'>
                    <img src={Calidad} className='Certificado' alt="" />
                    <h4>CURSO ESPECIAL EN EJERCICIO DERECHOS FUNDAMENTALES EN EL TRABAJO</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex flex-column align-items-center Certi'>
                    <img src={Calidad} className='Certificado me-0' alt="" />
                    <h4>HABILIDADES SOCIOEMOCIONALES PARA EL EMPLEO DECENTE</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Certificados;