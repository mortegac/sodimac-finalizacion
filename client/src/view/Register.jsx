import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HeaderSection from '../components/HeaderSection'


const Register = () =>{

    return(
        <>
            <HeaderSection 
                title='Registrate' 
                description='para juntar tus pokemones'
                view='register'
            />
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                Nunca compartiremos su correo electrónico con nadie más.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Registrarse
                            </Button>
                        </Form>
                    
                    </Col>
                    
                </Row>
            
            </Container>

        </>      
    )

}

export default Register; 



