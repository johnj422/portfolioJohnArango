import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import projImg1 from '../assets/img/projImg1.png';
import projImg2 from '../assets/img/projImg2.png';
import ProjectCards from './ProjectCards';
import colorSharp2 from '../assets/img/color-sharp2.png';
import { BrowserRouter as Router } from 'react-router-dom';


export default function Projects() {
    const projects = [

        {
            title: 'Adoptame',
            description: `Henry Bootcamp, Bogotá Colombia.
            • Create and develop an app that allows the adoption of animals to operate in five Latin American countries.`,
            imgUrl: projImg2,
            url: 'https://adoptame.vercel.app/',
        },
        {
            title: 'Get Them All Videogames',
            description: 'Project Description',
            imgUrl: projImg1,
            url: 'https://get-them-all-videogames.vercel.app/',
        },
        {
            title: 'Adoptame',
            description: 'Project Description',
            imgUrl: projImg2,
            url: 'https://adoptame.vercel.app/',
        },
    ];
    
    return (
        <Router>
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col size={12}>
                            <div>
                            <h2>Projects</h2>
                            <p>Descripción</p>
                            </div>
                            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                                {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                    </Nav.Item>
                                </Nav> */}
                                <Tab.Content>
                                    <Tab.Pane eventKey='first'>
                                        <Row>
                                            {
                                                projects.map((project, index) => {
                                                    return (
                                                        <ProjectCards
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    {/* <Tab.Pane eventKey='second'>
                                        <p>Test</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='third'>
                                        <p>Test</p>
                                    </Tab.Pane> */}
                                </Tab.Content>
                            </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt='' />
        </section>
        </Router>
    )
}
