import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class AddPg extends React.Component {
    constructor(props){
     super(props);
     this.state = {
         category: ``,
         charges:  ``,
         message: ``,
         isAdded: false,
         redirect: false
     }   
     this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        let formData = {
            pgName: e.target[0].value,
            address: e.target[3].value,
            category: this.state.category,
            charges: this.state.charges
        }
        console.log(formData, "formdata")
        axios.post('http://localhost:3000/pg', formData).then((res) => {
            if(!res.data.errors){
                this.setState({
                    isAdded: true,
                    message: 'pg was added successfully'
                })
            }
        }).catch((err) => {
            this.setState({
                message: err
            })
        })
    }

    onChangeCategory(e){
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            category: e.target.value
        })
    }

    onChangePrice(e){
        e.preventDefault();
        console.log(e.target.id)
        this.setState({
            charges: e.target.value
        })
    }

    onClick(){
        this.setState({
            redirect: true
        })
    }

    render(){
        if(this.state.redirect){
           return <Redirect to={{pathname: "/pg"}} />
        }
        return(
            <div  className="container">
                <form onSubmit={this.onSubmit}>
                <div className="form-group container">
                    <label>Name of the PG</label>
                    <input className="form-control" type="text"/>
                    <div className="form-group">
                    <label>Select Category</label>
                    <div onChange={this.onChangeCategory.bind(this)}>
                    <select className="form-control">
                        <option>
                            select
                        </option>
                        <option id="men's">
                            men's
                        </option>
                        <option id="women's">
                            women's
                        </option>
                    </select>
                    </div>
                    
                    <label>Select Price</label>
                    <select className="form-control" onChange={this.onChangePrice.bind(this)}>
                        <option>
                            select
                        </option>
                        <option id="less than 6k per month">
                            less than 6k per month
                        </option>
                        <option id="6k-8k per month">
                            6k-8k per month                   
                        </option>
                        <option id="above 8k per month">
                            above 8k per month                     
                        </option>
                    </select>
                    <div className="form-group">
                        <label htmlFor="addressOfPg">Add Address</label>
                        <textarea className="form-control rounded-0" id="addressOfPfg" rows="3"></textarea>
                    </div>
                    </div> 
                    <input type="submit" name="submit" className="btn btn-primary"/>
                </div>
                </form>
                {this.state.isAdded && <h5>{this.state.message}</h5>}
            </div>
        )
    }
}

export default AddPg;