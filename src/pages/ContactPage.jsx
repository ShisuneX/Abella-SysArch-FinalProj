import '../App.css';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap"

const Contact = () => {
    const fbButton = () => {
        window.open('https://www.fb.com/manoy99')
    }
    return(
        <>
            <Container fluid className='mx-0 px-0' style={{overflow: "hidden"}}>
                <Row>
                    <Col className="contact-text"   >
                        <h1 style={{paddingBottom: "10px"}}>Contact Us</h1>
                        <Button size="lg" className="contact-button-fb" onClick={fbButton}>
                            <p style={{color: "black", paddingLeft: "40px", paddingTop: "2px"}}>Facebook</p>
                        </Button>
                        <br/><br/>
                        <Button size="lg" className="contact-button-msngr" onClick={fbButton}>
                            <p style={{color: "black", paddingLeft: "40px", paddingTop: "2px"}}>Messenger</p>
                        </Button>
                        <br/><br/>
                        <Button size="lg" className="contact-button-twt" onClick={fbButton}>
                            <p style={{color: "black", paddingLeft: "40px", paddingTop: "2px"}}>Twitter</p>
                        </Button>
                    </Col>
                    <Col className="contact-col">
                    </Col>
                </Row>
                
            </Container>
        </>
    );
}

export { Contact }