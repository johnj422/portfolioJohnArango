import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import 'animate.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const [index, setIndex] = useState(1);
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
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(100);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    const linkTo = (e) => {
        return
        <a href='https://www.linkedin.com/in/john-arango/' target="_blank"></a>
    }

    return (
        <Router>
            <section className='banner' id='home'>
                <Container>
                    <Row className='align-items-center'>
                        <Col xs={12} md={6} xl={7}>
                                    <div>
                                        <span className='tagline'>Welcome to my Portfolio</span>
                                        <h1>{"Hi, I'm John Arango... and I'm a "}<span className='wrap'>{text}</span></h1>
                                        <p>Entrepreneur, inquisitive, and self-taught, with over ten years of commercial experience in the technology sector. I am currently turning my career around as a Full Stack Developer, looking for new challenges. After working in this industry for so long, I decided to learn how things work, so I began this adventure of programming and developing skills by creating a fully functional Web application that connects to an API and displays information about the details of thousands of Video Games. Another project I worked on with my team is an app that allows people and foundations to list their pets for adoption.</p>
                                        <button onClick={(e) => linkTo}>Let's Connect
                                            <HashLink to='#connect'>
                                                <ArrowRightCircle size={25} />
                                            </HashLink>
                                        </button>
                                    </div>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt='Header Img'></img>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Router>
    )
}
