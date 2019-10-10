import React from 'react'
import $ from "jquery"
// import { Link } from 'gatsby'

import navStyles from '../styles/nav.module.scss'
import { Navbar, Nav } from 'react-bootstrap'
import NavLine from "../images/navLine.png"
import Logo from "../images/LevelUp-Logo.png"



const NavBarLevel = () => {
    return (

    	 $(document).ready(function () {
    var scrollTop = 0;
    $(window).scroll(function () {
      scrollTop = $(window).scrollTop();
      $('.counter').html(scrollTop);

      if (scrollTop >= 100) {
        $('.toolbar').addClass('scrolled');
      } else if (scrollTop < 100) {
        $('.toolbar').removeClass('scrolled');
      }
    });
  }),

  $(document).ready(function () {
    $('a[rel="relativeanchor"]').click(function () {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
      return false;
    });
  }),

    		<Navbar className={navStyles.toolbar} sticky="top" expand="lg" >
    		<div id="MobileMenu" className={navStyles.mNav} tabIndex="0">
        <div className={navStyles.mNavDropdown} id="top">
          <a id="toAbout" rel="relativeanchor" href="#about">About</a>
          <a id="toCollaborate" rel="relativeanchor" href="#courses">Collaborate</a>
          <a id="toContact" rel="relativeanchor" href="#contact">Contact</a>
        </div>
      </div>
			<Navbar.Brand href="/">
			<img className={navStyles.navLogo}src={Logo} alt="" />
			</Navbar.Brand>
			<div className={navStyles.spacer}>
				<img src={NavLine} className={navStyles.navDivide} alt="" />
			</div>
			<Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			      <Nav.Link rel="relativeanchor" className={ navStyles.navLink }href="#about">About</Nav.Link>
			      <Nav.Link rel="relativeanchor" className={ navStyles.navLink }href="#courses">Collaborate</Nav.Link>
			      <Nav.Link rel="relativeanchor" className={ navStyles.navLink }href="#link">Contact</Nav.Link>
			    </Nav>
		  	</Navbar.Collapse>

		</Navbar>
        
    )
}

export default NavBarLevel