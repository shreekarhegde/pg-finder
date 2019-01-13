import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import CreateProfile from '../src/componentes/register_user';
import AddPg from '../src/componentes/add_pg';
import FindPg from './componentes/show_pg';

const AppRouter = () => (
        <Router>
          <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <Link to="/">Home</Link>
              <Link to="/profile">register</Link>
              <Link to="/add/pg">Add a PG </Link>
            </div>
          </nav>              
          <Route path="/profile" component={CreateProfile} exact />
          <Route path="/add/pg" component={AddPg} exact/>
          <Route path="/" component={FindPg} exact />
          </div>
        </Router>
)
      
export default AppRouter;
