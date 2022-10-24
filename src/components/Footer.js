import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/miguel-mendiola-ara" alt="LinkedIn"><img src={navIcon1}/></a>
                            <a href="https://github.com/MiMendiola" alt="GitHub"><img src={navIcon2}/></a>
                        </div>
                    </Col>
                    <Col sm={12} className="text-center">
                        <p>CopyRight 2022. All Right Reserved By Miguel Mendiola</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}