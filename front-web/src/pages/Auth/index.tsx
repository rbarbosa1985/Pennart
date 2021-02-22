import React from 'react';
import './styles.scss';
import { ReactComponent as AuthImage } from 'core/assets/images/auth.svg';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';


const Auth = () => (
     <div className="auth-container">
          <div className="auth-info">
               <h1 className="auth-info-title">Bia Penna</h1>
               <p className="auth-info-subtitle">
                    Faça parte do nosso grupo e participe de nossas lives e conversas.
               </p>
               <div className="auth-img">
                    <AuthImage />
               </div>
          </div>
          <div className="auth-content">
               <Switch>
                    <Route path="/auth/login"><Login /></Route>
                    <Route path="/auth/register"><h1>Cadastro</h1></Route>
                    <Route path="/auth/recover"><h1>Recuperar</h1></Route>
               </Switch>
          </div>
     </div>
)

export default Auth;