import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../images/logo.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
		  Register
          </NavLink>
          <NavLink to='/GenerateHash' activeStyle>
		  GenerateHash
          </NavLink>
          <NavLink to='/Verify' activeStyle>
		  Verify      
		      </NavLink>
          <NavLink to='/about' activeStyle>
			About
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/wallet'>Connect to wallet</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;