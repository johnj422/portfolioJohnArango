import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import JavaScript from '../assets/img/JavaScript.svg'
import ReactLogo from '../assets/img/React.svg'
import ReduxLogo from '../assets/img/Redux.svg'
import NodeLogo from '../assets/img/NodeJS.svg'
import ExpressLogo from '../assets/img/Express.svg'
import PostgreSQL from '../assets/img/PostgreSQL.svg'
import SequelizeLogo from '../assets/img/Sequelize.svg'
import HtmlLogo from '../assets/img/HTML.svg'
import CssLogo from '../assets/img/CSS.svg'
import Scrum from '../assets/img/Scrum.svg'

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>
                        Tech Skills
                    </h2>
                   
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={JavaScript} alt='Image' />
                            <h5>JavaScript</h5>
                        </div>
                        <div className='item'>
                            <img src={ReactLogo} alt='Image' />
                            <h5>React</h5>
                        </div>
                        <div className='item'>
                            <img src={ReduxLogo} alt='Image' />
                            <h5>Redux</h5>
                        </div>
                        <div className='item'>
                            <img src={NodeLogo} alt='Image' />
                            <h5>NodeJS</h5>
                        </div>
                        <div className='item'>
                            <img src={ExpressLogo} alt='Image' />
                            <h5>Express</h5>
                        </div>
                        <div className='item'>
                            <img src={PostgreSQL} alt='Image' />
                            <h5>PostgreSQL</h5>
                        </div>
                        <div className='item'>
                            <img src={SequelizeLogo} alt='Image' />
                            <h5>Sequelize</h5>
                        </div>
                        <div className='item'>
                            <img src={HtmlLogo} alt='Image' />
                            <h5>HTML</h5>
                        </div>
                        <div className='item'>
                            <img src={CssLogo} alt='Image' />
                            <h5>CSS</h5>
                        </div>
                        <div className='item'>
                            <img src={Scrum} alt='Image' />
                            <h5>Scrum</h5>
                        </div>
                       
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
