import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Photo from "../Images/Logos-aptitud.png"
import Illus from "../Images/Logos-aptitud 2.png"
import Premi from "../Images/Logos-aptitud 3.png"
import After from "../Images/Logos-aptitud 4.png"
import ImgReact from "../Images/pngwing.com (3).png"
import ImgHtml from "../Images/pngegg.png"
import ImgCSS from "../Images/pngegg (1).png"
import ImgJS from "../Images/pngegg (2).png"
import ImgBoot from "../Images/pngegg (3).png"

function Stack() {
    return (
        <Container>
            <h3 className='mx-auto d-flex justify-content-center fs-1 fw-bold text-center mt-5'>Lenguajes</h3>
            <Row className='justify-content-center my-4 Gapeo d-flex'>
                <img src={ImgHtml} className='Logo' alt="" />
                <img src={ImgJS} className='Logo' alt="" />
                <img src={ImgCSS} className='Logo' alt="" />
            </Row>
            <h3 className='mx-auto d-flex justify-content-center fs-1 fw-bold text-center mt-5'>Frameworks</h3>
            <Row className='justify-content-center my-4 Gapeo d-flex'>
                <img src={ImgReact} className='Logo' alt="" />
                <img src={ImgBoot} className='Logo' alt="" />
            </Row>
            <Container className='mx-auto d-flex flex-column justify-content-center'>
                <h3 className='mx-auto d-flex justify-content-center fs-1 fw-bold text-center'>Gran manejo en los siguientes Softwares de Adobe</h3>
                <Row className='justify-content-center my-4 Gapeo d-flex'>
                    <img src={Illus} alt="" className='Softwares ' />
                    <img src={Photo} alt="" className='Softwares ' />
                    <img src={Premi} alt="" className='Softwares ' />
                    <img src={After} alt="" className='Softwares ' />
                </Row>
                <ul className='d-flex align-items-center flex-column'>
                    <p className='fw-bold mb-3'>Tambien cuento con un manejo intermedio de los siguientes Softwares</p>
                    <li>Adobe Lightroom</li>
                    <li>Adobe Animate</li>
                    <li>Adobe InDesing</li>
                    <li>Adobe XD</li>
                    <li>Adobe Substance</li>
                </ul>
            </Container>
        </Container>
    )
}

export default Stack