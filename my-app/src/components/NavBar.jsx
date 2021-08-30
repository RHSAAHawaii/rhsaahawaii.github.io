import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../style.css';
import rooseveltWhiteLogo from '../images/rooseveltWhiteLogo.png';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" rounded id='navBar'>
        <Navbar.Brand as={NavLink} exact to='/' className='whiteText' style={{fontSize: 22}} id='logoFont'>
          <img alt="Roosevelt Logo" src={rooseveltWhiteLogo}
          width="40"
          height="45"
          style={{marginRight:10}}
          />
          Roosevelt Alumni
        </Navbar.Brand>
        <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

        <Nav className='ml-auto' style={{fontSize: 20}}>
          <Nav.Link className='whiteText' as={NavLink} exact to='/impact'>Impact</Nav.Link>
          <Nav.Link className='whiteText' as={NavLink} exact to='/events'>Events</Nav.Link>
          <Nav.Link className='whiteText' as={NavLink} exact to='/members'>Membership</Nav.Link>
          <Nav.Link className='whiteText' as={NavLink} exact to='/board'>Board</Nav.Link>
          <Nav.Link className='whiteText' as={NavLink} exact to='/donate'>Donate</Nav.Link>
          <Nav.Link className='whiteText' as={NavLink} exact to='/scholarships'>Scholarships</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default NavBar;
