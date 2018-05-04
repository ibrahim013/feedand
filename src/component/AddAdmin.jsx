import React from 'react';
import {Icon, Button, Row, Col} from 'react-materialize';
// import  TextFieldGroup from './Common/FormComponent.jsx'

export class AddAdmin extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="search">
            <Row>
                <Col s={7}>
                 <input type="text" placeholder="Search.." name="search"/>
                </Col>
                <Col s={5}>
                    <Button>Assign Admin</Button>
                </Col>
            </Row> 
            </div>
        )
    }
}
export default AddAdmin;