import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { FaUserAlt } from 'react-icons/fa';
import './Login.css';

const Login = () => {
    return (
        <>
            <Container className="text-center">
                <Row>
                    <Col lg={4} md={6} sm={12} className="mt-5 m-auto shadow rounded p-5 bg-light">
                        <div>
                            <div className="icon m-auto mb-4"><FaUserAlt/></div>
                            <form>
                                <input className="form-control" type="email" placeholder="username"/>
                                <input className="form-control mt-3" type="password" placeholder="password"/> <br/>
                            </form>

                            <div className="d-grid">
                                <button className="btn btn-success" type="submit">Login</button>
                            </div>

                            <div className="d-flex justify-content-start align-items-center mt-3">
                                <button className="btn btn-link">Forgot password</button>
                                <span className="">|</span>
                                <button className="btn btn-link">Sign up</button>
                            </div>


                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;