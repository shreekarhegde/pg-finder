import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

class FindPg extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            data: ``
        }
    }

    onClick(category){
        console.log(category)
       axios.get(`http://localhost:3000/pg/${category}'s`).then((res) => {
           console.log(res.data)
           this.setState({
               redirect: true,
               data: res.data
           })
       }) 
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={{pathname: `/pg/particular`, state: {data: this.state.data}}} />
        }
        return(
            <div className="container">
            <div className="jumbotron">
                <h1>Welcome to PG finder!</h1>
            </div>
               <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.onClick.bind(this, "men")} id="men's">Find men's PG</button>
                <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={this.onClick.bind(this, "women")} id="women's">Find women's PG</button>
            </div>
        )
    }
}

export default FindPg;