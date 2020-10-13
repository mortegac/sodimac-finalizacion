import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import HeaderSection from '../components/HeaderSection'
import { fetchLogin } from "../services/login.js";


const Login = (props) =>{
    const [ user, setUser ] = useState('mortega');
    const [ password, setPassword ] = useState('miMegaClave');
    const [ message, setMessage ] = useState('');
    const [ loading, setLoading] = useState(false);
    const handleFormSubmit = async (e) =>  {

        setLoading(true)
        e.preventDefault();
        await fetchApi()
        
    }

    const fetchApi = async () =>{
        const body = {
            "username": user,
            "password": password,
        }

        await fetchLogin(body).then((res) => {
            console.log('res', res)
            
            if(res.data){
                
                res.data.message?
                    setMessage(res.data.message)
                    :props.history.push('favoritos')

            }
            
            setLoading(false)

            // setTimeout(() => {
            //      setMessage(res.message? res.message: '');
            //      setLoading(false)
            // }, 2000)
            
        });
    }
    return(
        <>
            <HeaderSection 
                title='Login' 
                description='Accede para ver tus pokemones favoritos'
                view='login'
            />
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={ (e)=> handleFormSubmit(e) }>
                            <Form.Group 
                                controlId="formBasicuser">
                                <Form.Label>user</Form.Label>
                                <Form.Control 
                                    onChange={(e) => setUser(e.target.value) } 
                                    value={user}
                                    type="text" 
                                    placeholder="Enter user" 
                                />
                                <Form.Text className="text-muted">
                                Nunca compartiremos su correo electrónico con nadie más.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Clave</Form.Label>
                                <Form.Control 
                                    onChange={(e) => setPassword(e.target.value) } 
                                    value={password}
                                    type="password" 
                                    placeholder="Password" />
                            </Form.Group>

                            { loading? 
                                (<Spinner animation="grow" /> )
                                : (<Button variant="primary" type="submit">Ingresar</Button>)
                            }
                            

                            {
                                message && 
                                    (
                                        <h5 style={{marginTop:10}} className="text-danger">{message}</h5>
                                    )
                                    // (<Alert  variant='danger'>{message}</Alert>)

                            }
                            
                        </Form>
                    
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            
            </Container>
            
        </>      
    )

}

export default Login; 



