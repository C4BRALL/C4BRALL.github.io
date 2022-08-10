import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import logo from '../../favicon_io/android-chrome-512x512.png'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={ logo } alt="Logo Joao Cabral" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' sctiveStyle>
            About me
          </NavLink>
          <NavLink to='/projects' sctiveStyle>
            Projects
          </NavLink>
          <NavLink to='/education' sctiveStyle>
            Education
          </NavLink>
          <NavLink to='/web-tech' sctiveStyle>
            Web Technologies
          </NavLink>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to='/contact' sctiveStyle>Let's Talk</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar;