import React from 'react';
import  TextFieldGroup from './Common/FormComponent.jsx'
import { Button, Modal } from 'react-materialize';

export class AddCaterers extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            businessName:'',
            contactPerson:'',
            number:'',
            email:'',
            userName:'',
            password:'',
        }  
        this.onHandleChange = this.onHandleChange.bind(this)   
        this.handleSubmit = this.handleSubmit.bind(this)   
    }
    componentDidMount(){
        console.log(this.state)
    }
    onHandleChange(event){
        this.setState({ [event.target.name]: event.target.value });
      }
      handleSubmit(event){
        event.preventDefault();
        console.log(this.state)
      }
    render(){
        return(
            <div>
                <div className="mainform">
                <TextFieldGroup
                s={8}
                label='Business Name'
                icon='business'
                name='businessname'
                onChange={this.onHandleChange}
                value={this.state.businessName}
                />
                <TextFieldGroup
                s={8}
                label='Name of Contact Person'
                icon='account_circle'
                name='contactperson'
                onChange={this.onHandleChange}
                value={this.state.contactPerson}
                />
                <TextFieldGroup
                s={8}
                label='Mobile Number'
                icon='phone'
                type="tel"
                name='number'
                onChange={this.onHandleChange}
                value={this.state.number}
                />
                <TextFieldGroup
                s={8}
                label='email'
                icon='email'
                type='email'
                name='email'
                onChange={this.onHandleChange}
                value={this.state.email}
                />
                </div>
                <div className="secondname">
                <Modal
                    header='Create Caterer'
                    trigger={<Button>Create Caterer</Button>}>
                    <div>
                    <TextFieldGroup
                        label='Username'
                        icon='perm_identity'
                        name='username'
                        onChange={this.onHandleChange}
                        value={this.state.userName}
                        />  
                        <TextFieldGroup
                        label='Password'
                        type='password'
                        icon='https'
                        name='password'
                        onChange={this.onHandleChange}
                        value={this.state.password}
                        /> 
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </div>
                    </Modal>
                </div>
            </div>
        )
    }
}
export default AddCaterers;