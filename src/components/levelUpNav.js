import React from "react"
// import { Link } from 'gatsby'

import navStyles from "../styles/nav.module.scss"
import { Navbar, Nav } from "react-bootstrap"
import NavLine from "../images/navLine.png"
import Logo from "../images/LevelUp-Logo.png"
import "../styles/nav.css"
import Headroom from "react-headroom"

const NavBarLevel = () => {
	return (
		<Headroom
			className={navStyles.headroomScrolled}
			style={{
				zIndex: "12",
			}}
		>
			<Navbar className="toolbar" sticky="top" expand="lg">
				<div id="MobileMenu" className={navStyles.mNav} tabIndex="0">
					<div className={navStyles.mNavDropdown} id="top">
						<a id="toAbout" rel="relativeanchor" href="#about">
							About
						</a>
						<a id="toCollaborate" rel="relativeanchor" href="#collaborate">
							Collaborate
						</a>
						<a id="toContact" rel="relativeanchor" href="#contact">
							Contact
						</a>
					</div>
				</div>
				<Navbar.Brand href="#top">
					<img className={navStyles.navLogo} src={Logo} alt="" />
				</Navbar.Brand>
				<div className={navStyles.spacer}>
					<img src={NavLine} className={navStyles.navDivide} alt="" />
				</div>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link
							rel="relativeanchor"
							className={navStyles.navLink}
							href="#about"
						>
							About
						</Nav.Link>
						<Nav.Link
							rel="relativeanchor"
							className={navStyles.navLink}
							href="#collaborate"
						>
							Collaborate
						</Nav.Link>
						<Nav.Link
							rel="relativeanchor"
							className={navStyles.navLink}
							href="#contact"
						>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Headroom>
	)
}

export default NavBarLevel
