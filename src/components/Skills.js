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
import colorSharp from '../assets/img/color-sharp.png'

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
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
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Tech Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className='item'>
                                    <img src={JavaScript} alt='JavaScript' />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={ReactLogo} alt='React' />
                                    <h5>React</h5>
                                </div>
                                <div className='item'>
                                    <img src={ReduxLogo} alt='Redux' />
                                    <h5>Redux</h5>
                                </div>
                                <div className='item'>
                                    <img src={NodeLogo} alt='Node' />
                                    <h5>NodeJS</h5>
                                </div>
                                <div className='item'>
                                    <img src={ExpressLogo} alt='Express' />
                                    <h5>Express</h5>
                                </div>
                                <div className='item'>
                                    <img src={PostgreSQL} alt='PostgreSQL' />
                                    <h5>PostgreSQL</h5>
                                </div>
                                <div className='item'>
                                    <img src={SequelizeLogo} alt='Sequelize' />
                                    <h5>Sequelize</h5>
                                </div>
                                <div className='item'>
                                    <img src={HtmlLogo} alt='HTML' />
                                    <h5>HTML</h5>
                                </div>
                                <div className='item'>
                                    <img src={CssLogo} alt='CSS' />
                                    <h5>CSS</h5>
                                </div>
                                <div className='item'>
                                    <img src={Scrum} alt='Scrum' />
                                    <h5>Scrum</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className='background-image-left' src={colorSharp} alt='Bg' />
        </section>
    )
}
