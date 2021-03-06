import React from 'react';
import { Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles.scss';
import PrivateRoute from "../../core/components/Routes/PrivateRoute";

const Admin = () => {
     return (
          <div className="admin-container">
               <Navbar />
               <div className="admin-content">
                    <Switch>
                         <PrivateRoute path="/admin/products"> <h1>Products</h1> </PrivateRoute>
                         <PrivateRoute path="/admin/categories"><h1>Categories</h1></PrivateRoute>
                         <PrivateRoute path="/admin/users" allowedRoutes={['ROLE_ADMIN']}><h1>Users</h1></PrivateRoute>
                    </Switch>
               </div>
          </div>
     )
}

export default Admin;
