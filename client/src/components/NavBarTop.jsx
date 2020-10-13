import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import {Navbar, Nav, Button } from 'react-bootstrap';
import { isActiveSession, removeSession } from '../utils/helpers.js';

const NavBarTop = (props) =>{
    const history = useHistory();
    const [auth, setAuth ] = useState(isActiveSession());

console.log('-props-', props);
    useEffect(() => {
        // const session = getSession();
        // session === false? setAuth(false): setAuth(true)
        setAuth(isActiveSession())
        console.log('--auth--', auth);

    },[auth])

    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        await changeState();
        // if(!auth) 
        // historyc.push("/");
    }

    const changeState = async ()=>{

        await removeSession();
        const status = await isActiveSession();
        setAuth(status);
        console.log('--status--', auth);
    }

    return(
        <Navbar>
            <Navbar.Brand href="#home">PK</Navbar.Brand>
            
            <Nav className="mr-auto">
            
                <Link className="nav-link" to='/' >Todos los pokemones</Link>
                <Link className="nav-link" to='/favoritos' >Favoritos</Link>
                
            </Nav>

            <Nav>
                
                {
                    auth?
                    (
                        <Button onClick={ (e)=> handleFormSubmit(e) } variant="primary" type="submit">Logout</Button>
                    ):(
                        <>
                            <Link className="nav-link outline-primary" to='/login' >Login</Link> 
                            <Link className="nav-link outline-primary" to='/register' >Register</Link>
                        </>
                    )
                }
                 
               
            </Nav>

        </Navbar>

    )

}

export default NavBarTop;
