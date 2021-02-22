import Auth from 'pages/Auth';
import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Home from './pages/Home';
import history from "./core/utils/history";
import Artist from 'pages/Artist';

const Routes = () => {
     return (
          <Router history={history}>
               <Navbar />
               <Switch>
                    <Route path="/" exact> <Home /> </Route>
                    <Route path="/artist" exact> <Artist /> </Route>
                    <Redirect from="/auth" to="/auth/login" exact />
                    <Route path="/auth" > <Auth /> </Route>
                    <Redirect from="/admin" to="admin/products" exact></Redirect>
                    <Route path="/admin" > <Admin /> </Route>
               </Switch>
          </Router>
     )
}

export default Routes;