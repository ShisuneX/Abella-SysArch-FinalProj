import '../App.css';

import { Container, Row, Col } from "react-bootstrap"

const Landing = () => {
    return(
        <>
            <Container fluid className='mx-0 px-0' style={{overflow: "hidden"}}>
                <Row>
                    <Col className="landing-col">
                        <h1 className="col-text">Are you a parent and in need of a Job?</h1>
                        <h1>Well you found the right place!</h1>
                    </Col>
                </Row>
                
            </Container>
        </>
    );
}

export { Landing }