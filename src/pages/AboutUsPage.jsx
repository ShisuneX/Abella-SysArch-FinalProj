import '../App.css';

import { Container, Row, Col } from "react-bootstrap"

const AboutUs = () => {
    return(
        <>
            <Container fluid className='mx-0 px-0' style={{overflow: "hidden"}}>
                <Row>
                    <Col className="aboutus-text"   >
                        <h1>JobFinder</h1>
                        <h2 className="aboutus-text-subheader">Finding suitable jobs, for your needs</h2>
                        <br/>
                        <h3 className="aboutus-text-info">We are a company that helps individuals with
                            parental responsibilities from finding
                            suitable jobs based on their job preferences and 
                            we also give recommendations based on their profile.
                            We also have a feature where parents who have found a 
                            job can hire a nanny to take care of their children while they are away.
                        </h3>
                        <h1 className="aboutus-text-contact"> <a href="contact">Contact us now!</a></h1>
                    </Col>
                    <Col className="aboutus-col">
                    
                    </Col>
                </Row>
                
            </Container>
        </>
    );
}

export { AboutUs }