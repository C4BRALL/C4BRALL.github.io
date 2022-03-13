import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>JC-dev</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about'>
            About me
          </NavLink>
          <NavLink to='/projects'>
            Projects
          </NavLink>
          <NavLink to='/education'>
            Education
          </NavLink>
          <NavLink to='/web-tech'>
            Web Technologies
          </NavLink>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to='/contact'>Let's Talk</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar;