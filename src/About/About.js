import React from 'react';
import './about.scss';
import { Container, Row, Col } from 'reactstrap';
import { Card } from 'react-bootstrap';

const about = () => {

    return (

        <div className='about-page'>
           <div>
            <Container >
                <Row mb={3}>
                    <Col md={6} lg={3}>
                        <Card className='card-mb' >
                            <Card.Img variant='top' src={require('./images/academy.jpg')} />
                            <Card.Body>
                            <Card.Title>
                                <h4 className='text-center'>Education</h4>
                            </Card.Title>
                            <Card.Text>
                            1. BSc Information Systems <b>Yezreel Valley College</b>
                            </Card.Text>
                            <Card.Text>
                            2. Microsoft Excel Expert diploma <b> John Brice</b>
                            </Card.Text>
                       
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className='card-mb'>
                            <Card.Img variant='top' src={require('./images/workExp.jpg')} />
                            <Card.Body>
                            <Card.Title>
                                <h4 className='text-center'>Work Experience</h4>
                            </Card.Title>
                            <Card.Text>
                            <span>
                            1. Full Stack Develover<b>|Cellcom Israel</b>,2021-Today                           
                            </span>
                            </Card.Text>
                            <Card.Text>
                            2. IT Project Manager<b>|Cellcom Israel</b>,2016-2021
                            </Card.Text>
                           

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card  className='card-mb' >
                            <Card.Img variant='top' src={require('./images/skills.jpg')} />
                            <Card.Body>
                             <Card.Title>
                                <h4 className='text-center'>Programming Skills</h4>
                            </Card.Title>
                            <Card.Text>
                               1. Languages : C,C#,Java,PHP,HTML,Java Script,React,Node JS,Scss
                            </Card.Text>
                            <Card.Text>
                               2. Other: SQL,SAS,R
                            </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
             
            
                </Row>
            </Container>
            </div>
        </div>
    );

}

export default about;
