import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './styles.scss';
import { getAccessTokenDecode, isAuthenticated, logout } from "../../utils/auth";

const Navbar = () => {
     const [currentUser, setCurrentUser] = useState('');
     const location = useLocation();

     useEffect(() => {
          const currentUserData = getAccessTokenDecode();
          setCurrentUser(currentUserData.user_name);
     }, [location]);

     const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
          logout();
     }

     return (
          <nav className="row main-nav">
               <div className="col-3">
                    <Link to="/" className="nav-logo-text">
                         <h4>Bia Penna</h4>
                    </Link>
               </div>
               <div className="col-6">
                    <ul className="main-menu">
                         <li>
                              <NavLink className="nav-link" to="/" exact>
                                   HOME
                              </NavLink>
                         </li>
                         <li>
                              <NavLink className="nav-link" to="/artist" >
                                   A ARTISTA
                              </NavLink>
                         </li>
                         <li>
                              <NavLink className="nav-link" to="/acervo" >
                                   ACERVO
                              </NavLink>
                         </li>
                         <li>
                              <NavLink className="nav-link" to="/videos" >
                                   VIDEOS
                              </NavLink>
                         </li>
                         <li>
                              <NavLink className="nav-link" to="/contato" >
                                   CONTATO
                              </NavLink>
                         </li>
                         {isAuthenticated() && (<li>
                              <NavLink className="nav-link" to="/admin" >
                                   ADMIN
                                   </NavLink>
                         </li>)}
                    </ul>
               </div>
               <div className="col-3 text-right">
                    {currentUser && (<> {currentUser} <a href="#logout" className="nav-link active d-inline" onClick={handleLogout}>LOGOUT</a> </>)}
                    {!currentUser && (<Link className="nav-link active" to="/auth/login">LOGIN</Link>)}
               </div>
          </nav>
     )
};

export default Navbar;