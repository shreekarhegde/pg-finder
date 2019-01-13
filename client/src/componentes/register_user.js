import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class CreateProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            redirect: false,
            gender: ''
        }
        this.onSubmit = this.onSubmit.bind(this); 
    }

    onSubmit(e){
        e.preventDefault();
        let formData = {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
            gender: this.state.gender,
            contactNumber: parseInt(e.target[7].value) 
        }
        console.log(formData)
        axios.post('http://localhost:3000/users', formData).then((user) => {
            console.log(user.data)
            this.setState({
                redirect: true             
            })        
        })
    }

    onChange(e){
        this.setState({
            gender: e.target.id
        })
    }

    render(){
        if(this.state.redirect){
           return <Redirect to="add/pg"/>
        }

        return(
            <div className="container">
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">First Name</label>
                    <input type="text" className="form-control" id="exampleInputFirstName" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Last Name</label>
                    <input type="text" className="form-control" id="exampleInputLastName" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ex: user@gmail.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="choose a password of atleast 8 chracters"/>
                </div>
                <div onChange={this.onChange.bind(this)}>
                <label>Gender</label>
                <div className="radio">
                    <label><input type="radio" id="male" name="radio"/>Male</label>
                </div>
                <div className="radio">
                    <label><input type="radio" id="female" name="radio"/>Female</label>
                </div>
                <div className="radio">
                    <label><input type="radio" id="others" name="radio"/>Others</label>
                </div>
                </div>
                <div className="form-group">
                    <label htmlFor="contact number">Contact Number</label>
                    <input type="text" className="form-control" id="contact number"/>
                </div>
                <input type="submit" className="btn btn-primary"/>
                </form>
            </div>
        )
    }
}

export default CreateProfile;