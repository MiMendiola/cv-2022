import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/mmendiol.jpeg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const toRotate = ["Software Developer", "Cross-platform developer", "Web Developer"];
    const period = 2000;

    useEffect(() => {
        let ticket = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticket)};
    }, [text]);


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        };

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }

    return (
        <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{"Hi I'm Miguel "}<span className="wrap">{text}</span></h1>
                    <p>
                        Young student eager to work as a developer.
                        I'm a fast learner who's always seeking to improve my skills, which is an advantage in the computing world due to the fact that it undergoes constant changes and updates. I am a very adaptable person and a very efficient problem solver.
                    </p>
                    <button onClick={() => window.open('mailto:mglmendiol@gmail.com')}>Let's connect <ArrowRightCircle size={25}/></button>
                </Col>

                <Col  xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>
                </Col>
            </Row>
        </Container>
        </section>
    );
}
