import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import checklife from "../assets/img/projects/check&life.jpg";
import vapeo from "../assets/img/projects/vapeoDig.jpg";
import menara from "../assets/img/projects/menaraDesign.jpg";
import tiktaktoe from "../assets/img/projects/tiktaktoe.JPG";
import todolist from "../assets/img/projects/todo-list.JPG";
import adminDashboard from "../assets/img/projects/adminDashboard.jpg";
import shopcart from "../assets/img/projects/shopping-cart.JPG";
import pomodoro from "../assets/img/projects/pomodoro.JPG";
import loginRegister from "../assets/img/projects/loginForm.JPG";
import threeDcards from "../assets/img/projects/3D Cards.JPG";
import animatedCards from "../assets/img/projects/animatedCards.JPG";
import animatedNotification from "../assets/img/projects/animatedNotification.JPG";
import checkandradio from "../assets/img/projects/checkbox&radio buttons.JPG";
import commentsystem from "../assets/img/projects/comment-system.JPG";
import instaProfile from "../assets/img/projects/instagram-profile.JPG";
import loginPage from "../assets/img/projects/login-page.JPG";
import menu from "../assets/img/projects/menu.JPG";
import personStack from "../assets/img/projects/person-stack.JPG";
import priceTable from "../assets/img/projects/price-table.JPG";
import circularProgressbar from "../assets/img/projects/circular-progress-bar.JPG";
import responsiveModal from "../assets/img/projects/responsive-modal.JPG";
import searchBar from "../assets/img/projects/search-bar.JPG";
import slider from "../assets/img/projects/slider.JPG";
import table from "../assets/img/projects/table.JPG";
import twitterCard from "../assets/img/projects/twitter-card.JPG";
import draganddrop from "../assets/img/projects/drag&drop.JPG";
import weatherWidget from "../assets/img/projects/weatherWidget.JPG";
import verticalMenu from "../assets/img/projects/verticalMenu.JPG";
import whatsappChat from "../assets/img/projects/whatsapp-chat.JPG";

import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Project = () => {

    const projectsCms = [
        {
            title: "Check&Life",
            // description: "The website was changed of platform from Wix to Wordpress in a fast and efficient way. Apart from this change, an improvement of the website was carried out.",
            imgUrl: checklife,
            url: "https://checkandlife.com/",
        },
        {
            title: "Vapeo Digital",
            // description: "Two different CMS were used, one for the visual and main part of the page that was made with Wordpress (which was created from scratch) and after this there was a PrestaShop (it was improved) which was in charge of the sales procedures of the store.",
            imgUrl: vapeo,
            url: "https://vapeodigital.es/es/",
        },
        {
            title: "Menara Diseño",
            // description: "Web page made for a construction company in Spain, in which various improvements are periodically carried out and which was made in react.",
            imgUrl: menara,
            url: "http://menaradesign.com/", 
        },
    ]
    const projectsScss = [
        {
            title: "3DCards",
            // description: "You can see 3 inverted cards created by html, css and scss In these you will see a photo on the front of the card and the information on the back.",
            imgUrl: threeDcards,
            url: "https://mimendiola.github.io/3D-Card-Flip/",
        },
        {
            title: "Animated Cards",
            // description: "You can see some cover letters with a side animation to which we can put the content we want.",
            imgUrl: animatedCards,
            url: "https://mimendiola.github.io/Animated-Cards/",
        },
        {
            title: "Animated Notification",
            // description: "Replica of the movement when we receive a notification.",
            imgUrl: animatedNotification,
            url: "https://mimendiola.github.io/Animated-Notification/",
        },
        {
            title: "Check and Radio buttons",
            // description: "Custom checkbox and radio buttons that we can use in different projects.",
            imgUrl: checkandradio,
            url: "https://mimendiola.github.io/CheckBox-Radio-buttons/",
        },
        {
            title: "Comment System",
            // description: "View of a comments section.",
            imgUrl: commentsystem,
            url: "https://mimendiola.github.io/Comment-System/",
        },
        {
            title: "Insta Profile",
            // description: "Replica of the profile photo of the Instagram application.",
            imgUrl: instaProfile,
            url: "https://mimendiola.github.io/Instagram-Profile/",
        },
        {
            title: "Login Page",
            // description: "On the left side we will find a login form and on the right is another space that we can use for something else such as a map to locate the business, a featured product or whatever the customer wants.",
            imgUrl: loginPage,
            url: "https://mimendiola.github.io/Login-Form/",
        },
        {
            title: "Menu",
            // description: "This is a main menu that can be used for a web page.",
            imgUrl: menu,
            url: "https://mimendiola.github.io/Horizontal-Menu/",
        },
        {
            title: "Person Stack",
            // description: "We have profiles of stacked people and when passing the mouse over it it shows us information (in this case the name). If there is too much information, it will show us at the end '...'.",
            imgUrl: personStack,
            url: "https://mimendiola.github.io/Person-Stack/",
        },
        {
            title: "Price Table",
            // description: "Here we can see 3 prices that can be used on some websites to show offers or to show offers for your services.",
            imgUrl: priceTable,
            url: "https://mimendiola.github.io/Price-Table/",
        },
        {
            title: "Circular Progress Bar",
            // description: "A functional circular mode progress bar.",
            imgUrl: circularProgressbar,
            url: "https://mimendiola.github.io/Progress-Circular-Bar/",
        },
        {
            title: "Responsive Modal",
            // description: "A modal box which we can use to launch alert messages or display information.",
            imgUrl: responsiveModal,
            url: "https://mimendiola.github.io/Responsive-Modal/",
        },
        {
            title: "Search Bar",
            // description: "Structure of a search bar.",
            imgUrl: searchBar,
            url: "https://mimendiola.github.io/Search-Bar/",
        },
        {
            title: "Slider",
            // description: "Slider made using CSS although the most recommended is to do it with JS.",
            imgUrl: slider,
            url: "https://mimendiola.github.io/Slider/",
        },
        {
            title: "Table",
            // description: "Table with styles that could be used in the future.",
            imgUrl: table,
            url: "https://mimendiola.github.io/Table/",
        },
        {
            title: "Twitter Card",
            // description: "Recreation of the twitter user card.",
            imgUrl: twitterCard,
            url: "https://mimendiola.github.io/Twitter-Card/",
        },
        {
            title: "Drag and Drop",
            // description: "Structure to drag and drop files that we want to upload to some space with a section for files already uploaded and see their upload process.",
            imgUrl: draganddrop,
            url: "https://mimendiola.github.io/UI-Upload-Files/",
        },
        {
            title: "Vertical Menu",
            // description: "Vertical menu which will expand when we place ourselves on it and will not affect the information on the page.",
            imgUrl: verticalMenu,
            url: "https://mimendiola.github.io/Vertical-Menu/",
        },
        {
            title: "Weather Widget",
            // description: "Weather widget in which we will find the highest and lowest temperature, the time of day and the temperature and the forecast for the next few days.",
            imgUrl: weatherWidget,
            url: "https://mimendiola.github.io/Weather-Widget/",
        },
        {
            title: "Whatsapp Chat",
            description: "",
            imgUrl: whatsappChat,
            url: "https://mimendiola.github.io/WhatsApp-Chat/",
        },
    ]
    const projectsJS = [
        {
            title: "Tic-Tac-Toe",
            description: "",
            imgUrl: tiktaktoe,
            url: "https://mimendiola.github.io/Tic-Tac-Toe/",
        },
        {
            title: "Todo-List",
            // description: "Proyect where you can see a use of HTML, SCSS and JS and some use of the function new Date() and the localStorage in which the tasks added by the user will be saved. You can use day by day or every week to save our tasks.",
            imgUrl: todolist,
            url: "https://mimendiola.github.io/Todo-List/",
        },
        {
            title: "Shopping Cart",
            description: "",
            imgUrl: shopcart,
            url: "https://mimendiola.github.io/Shopping-Cart/",
        },
        {
            title: "Pomodoro",
            description: "",
            imgUrl: pomodoro,
            url: "https://mimendiola.github.io/Pomodoro/",
        },
        {
            title: "Login/Register form",
            // description: "This product is created for the practice of creating a form with the different security measures that a user will find in a real login or registration.",
            imgUrl: loginRegister,
            url: "https://mimendiola.github.io/Login-Register-form/",
        },
        {
            title: "Admin Dashboard",
            // description: "Admin dashboard where I work with.",
            imgUrl: adminDashboard,
            url: "https://github.com/MiMendiola/Admin-Dashboard",
        },
    ]

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Variety of projects built with different technologies</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">CMS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">SCSS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">JS</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projectsCms.map((project, index) => {
                                                return( 
                                                    <ProjectCard
                                                    key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projectsScss.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projectsJS.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="bgImgR"></img>
        </section>
    )
};