import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import html5 from "../assets/img/Tech/html5.png";
import css from "../assets/img/Tech/css.png";
import scss from "../assets/img/Tech/scss.png";
import js from "../assets/img/Tech/js.png";
import github from "../assets/img/Tech/github.png";
import react from "../assets/img/Tech/react.png";
import angular from "../assets/img/Tech/angular.png";
import php from "../assets/img/Tech/php.png";
import python from "../assets/img/Tech/python.png";
import mysql from "../assets/img/Tech/mysql.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
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
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>
                                <h4>Every day is a new challenge</h4>
                                Skills obtained based on courses taken and their corresponding practice.
                            </p>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={html5} alt="Skill"/>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Skill"/>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img className="scss" src={scss} alt="Skill"/>
                                    <h5>SCSS</h5>
                                </div>
                                <div className="item js">
                                    <img className="js" src={js} alt="Skill"/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={github} alt="Skill"/>
                                    <h5>GitHub</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Skill"/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={angular} alt="Skill"/>
                                    <h5>Angular</h5>
                                </div>
                                <div className="item">
                                    <img src={php} alt="Skill"/>
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="Skill"/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql} alt="Skill"/>
                                    <h5>MySql</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="bgLeft"/>
        </section>
    )
}