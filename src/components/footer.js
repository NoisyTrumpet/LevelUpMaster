import React from "react"
import PropTypes from "prop-types"

// import { COLORS } from "../styles/constants"
import Logo from "../images/LevelUp-Logo.png"
import padUP from "../images/padUp.svg"
import Container from "react-bootstrap/Container"
import footerStyles from "../styles/footer.module.scss"

const Footer = ({ siteTitle }) => {
  return (
    <footer className={footerStyles.footer}>
      <img alt="Level Up Logo" src={Logo} className={footerStyles.footerLogo} />

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