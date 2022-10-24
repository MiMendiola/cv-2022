import { Col } from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, url}) => {

    return(
        <Col size={12} sm={6} md={4} onClick={url}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="projImg"/>

                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div><a href={url}>Demo</a></div>
                </div>
            </div>
        </Col>
    )
}