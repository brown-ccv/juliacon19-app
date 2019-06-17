import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/bcbi-logo.svg'


export default class HeaderNavigation extends Component{

  render(){
    return(
      <Navbar color="danger" dark expand="md">
        <a href="https://bcbi.brown.edu" target="_blank" rel="noopener noreferrer">
          <img alt="BCBI Logo" src={logo} className="bcbi-logo mr-4" />
        </a>
        <h1 className="border-left text-light p-4 display-3">Your App</h1>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-link dark h3 mr-5" exact to="/">Main</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link dark h3 mr-5" to="/about">About</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }

}
