import '../App.css';

import { Container, Row } from "react-bootstrap"


const Register = () => {

    return(
        <Container fluid className='mx-0 px-0' style={{overflow: "hidden"}}>
            <Row>
                <div className="Auth-form-container">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Create Account</h3>
                        <div className="form-group mt-3">
                            <label>First Name</label>
                            <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Andrew"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Last Name</label>
                            <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Abella"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Confirm Password</label>
                            <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Confirm Password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                            Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Already have an account? <a href="login">Login</a>
                        </p>
                        </div>
                    </form>
                </div>
            </Row>
        </Container>
    )
}

export { Register }