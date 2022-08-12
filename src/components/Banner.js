import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const toRotate = ['Fullstack Developer.', 'Frontend Developer.', 'Backend Developer.'];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta);

        return () => {
            clearInterval(ticker);
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    }
    const linkTo = (e) => {
        return
        <a href='https://www.linkedin.com/in/john-arango/' target="_blank"></a>
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Bienvenid@ a mi Portafolio</span>
                        <h1>{'Hola, soy John Arango.... un '}<span className='wrap'>{text}</span></h1>
                        <p>Emprendedor, curioso, autodidacta, con más de 10 años de experiencia en el sector Tecnológico desde la parte comercial. Actualmente estoy dando un giro a mi carrera, buscando nuevos retos como Full Stack Developer. Al estar involucrado tanto tiempo en este sector, decidí aprender cómo funcionan las cosas, así me embarqué en la aventura de la programación y el desarrollo de competencias que me permitieron ejecutar un proyecto individual que abarca Backend y Frontend, así como un proyecto en equipo en el cual hice parte del Front y fue desarrollado con metodologías ágiles en Sprints de una semana.</p>
                        <button onClick={(e) => linkTo}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Header Img'></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
