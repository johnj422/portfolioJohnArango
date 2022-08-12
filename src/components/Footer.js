import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export default function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={6}>
                        <img src={logo} alt='Logo' />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/john-arango/' target="_blank"><img src={navIcon1} alt='LinkedIN' /></a>
                            <a href='https://github.com/johnj422' target="_blank"><img src={navIcon2} alt='GitHub' /></a>
                            <a href='mailto:johnj42.dev@gmail.com' target="_blank"><img src={navIcon3} alt='Email' /></a>
                            <a href='https://wa.me/+573186195671' target="_blank"><img src={navIcon4} alt='Email' /></a>
                        </div>
                        <p>CopyRight 2022. All right Reserved to John Arango</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
