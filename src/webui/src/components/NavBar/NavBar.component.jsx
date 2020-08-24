import React from 'react';
import { 
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap'
import '../NavBar/NavBar.styles.css'
import {ToggleButtons} from '../ToggleButtons/ToggleButtons.component'

export const NavBar = (props) => {

    const {onChange, defaultValue, buttons} = props

    return (
        <Navbar bg="light" expand="lg " sticky="top" className='shadow-sm p-3 mb-5 bg-white rounded'>
            <Navbar.Brand href="/">
            <img 
                src="logo.svg" 
                alt="Cisco Logo"
                height="40px"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <ToggleButtons onChange={onChange} defaultValue={defaultValue} buttons={buttons}/>
                </Nav>
                <Nav className="ml-auto">
                    <NavDropdown title="Dropdown" 
                    id="collasible-nav-dropdown"
                    renderMenuOnMount={false}>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}