import React from 'react';
import { Jumbotron } from 'react-bootstrap';


const HeaderSection = (props) =>{
    const {view} = props
    let color= ''

    switch(view) {
    case 'login':
        color= 'alert info'
        break;
    case 'register':
        color= 'alert alert-secondary'
        break;
    case 'favorites':
        color= 'alert alert-warning'
        break;
    default:
        color= 'alert alert-success'
        break;
    }

    


    return(

        <Jumbotron className={ color}>
            <h1>{props.title}</h1>
            <p>
               {props.description}
            </p>
        </Jumbotron>

    )
}



export default HeaderSection;