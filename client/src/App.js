import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import NavBarTop from './components/NavBarTop'

//SECCIONES
import { Home } from './view/Home';
import Favorites from './view/Favorites.jsx';
import { NotFound } from './view/NotFound';
import Register from './view/Register';
import Login from './view/Login';


const App = () => {
  
  return (
    <Container>
      {/* <ThemeProvider> */}

        <BrowserRouter>
            <Row>
              <Col><NavBarTop/></Col>
            </Row>
            <Row>
              <Col>
                <Switch>
                  {/* <Redirect from='/hola' to='/home' /> */}
            
                  <Route exact path="/" component={Home} />
                  <Route exact path="/favoritos" component={Favorites} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />

                  <Route render={NotFound} />

                
                </Switch>
              </Col>
          </Row>
        </BrowserRouter>
        
      {/* </ThemeProvider> */}
    </Container>
  );
}

export default App;
