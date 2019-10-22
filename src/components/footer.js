import React from "react"
import PropTypes from "prop-types"
import Nav from "react-bootstrap/Nav"
import Logo from "../images/LevelUp-Logo.png"
import padUP from "../images/padUp.svg"
import Container from "react-bootstrap/Container"
import footerStyles from "../styles/footer.module.scss"

const Footer = ({ siteTitle }) => {
  return (
    <footer className={footerStyles.footer}>
      <Container>
        <img
          alt="Level Up Logo"
          src={Logo}
          className={footerStyles.footerLogo}
        />
        ​
        <div className={footerStyles.footerSocial}>
          <a
            href="https://www.facebook.com/LevelUPCodeWorks"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span
              className={`${footerStyles.socialIcon} ${footerStyles.faceBook}`}
            ></span>
          </a>
          <a
            href="https://www.instagram.com/levelup_cw/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span
              className={`${footerStyles.socialIcon} ${footerStyles.instaGram}`}
            ></span>
          </a>
          <a
            href="https://twitter.com/LevelUP_CW"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span
              className={`${footerStyles.socialIcon} ${footerStyles.twitTer}`}
            ></span>
          </a>
          <a
            href="https://www.linkedin.com/company/23748736"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span
              className={`${footerStyles.socialIcon} ${footerStyles.linkeDin}`}
            ></span>
          </a>
        </div>
      </Container>
      ​
      <Nav className={`${footerStyles.footerLinks}`} as="ul">
        <Nav.Item as="li">
          <Nav.Link
            href="https://www.af.mil/RSS/"
            rel="noopener noreferrer"
            target="_blank"
          >
            RSS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            href="https://www.afinspectorgeneral.af.mil"
            rel="noopener noreferrer"
            target="_blank"
          >
            IG
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            href="https://www.foia.af.mil"
            rel="noopener noreferrer"
            target="_blank"
          >
            FOIA
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            href="https://www.resilience.af.mil/SAPR/"
            rel="noopener noreferrer"
            target="_blank"
          >
            SAPR
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            href="https://www.usa.gov"
            rel="noopener noreferrer"
            target="_blank"
          >
            USA.gov
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            href="https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx"
            rel="noopener noreferrer"
            target="_blank"
          >
            Accessibility
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            href="https://www.af.mil/AF-Sites/"
            rel="noopener noreferrer"
            target="_blank"
          >
            AF Sites
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            href="https://www.af.mil/Disclaimer.aspx"
            rel="noopener noreferrer"
            target="_blank"
          >
            Link Disclaimer
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            href="https://www.af.mil/Portals/1/documents/AF_Executive_Fleet.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            AF Executive Fleet
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            href="https://prhome.defense.gov/NoFear/"
            rel="noopener noreferrer"
            target="_blank"
          >
            No FEAR Act
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            href="https://www.archives.gov/about/plans-reports/performance-accountability"
            rel="noopener noreferrer"
            target="_blank"
          >
            Strategic APR
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            href="https://www.resilience.af.mil"
            rel="noopener noreferrer"
            target="_blank"
          >
            Suicide Prevention
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            href="https://www.af.mil/Equal-Opportunity/"
            rel="noopener noreferrer"
            target="_blank"
          >
            EEO
          </Nav.Link>
        </Nav.Item>
      </Nav>
      ​
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer