import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Typical from 'react-typical';


export default function Home() {
    return (
        <Container fluid>
            <Row>
                {/* ------------------------------------JUMBO -------------------------------- */}
                <Col xs={12} md={12}>
                    <Jumbotron className="jumbo">
                    <span className="profile-details-name">
                        {" "}
                        Hello, I'M <span className="highlighted-text">Vicdoblepe</span>
                    </span>
                    <div className='colz-icon'>
                            <a href='https://www.linkedin.com/in/victor-perez-perez-programacion-web-development/' target='_blank' rel='noreferrer'>
                                <span
                                    style={{ fontSize: 30 }}
                                    className="mdi mdi-linkedin"
                                />
                            </a>
                            <a href='https://github.com/Doblepe' target='_blank' rel='noreferrer'>
                                <span
                                    style={{ fontSize: 30 }}
                                    className="mdi mdi-github"
                                />
                            </a>
                        </div>
                    <h1>
                            {""}
                            <Typical
                                steps={['Hello World!🌎⚡', 1000, 'Are you looking for the best JR Developer?👀 ', 1000, `You're on the right place!😏👌`, 1000]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </h1>
                        <span className='profile-role-tag-line'>
                            I'm an enthusiastic JR Full Stack Developer looking for my first chance! Check up my projects!
                        </span>
                    
                        <p>
                            <Button variant="primary" as={Link} to="/contact">Contact me</Button>
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}
