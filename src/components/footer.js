import React from "react"
import PropTypes from "prop-types"

// import { COLORS } from "../styles/constants"
import Logo from "../images/LevelUp-Logo.png"
import padUP from "../images/padUp.svg"

import footerStyles from "../styles/footer.module.scss"

const Footer = ({ siteTitle }) => {
  return (
    <footer className={footerStyles.footer}>

    <a rel="relativeanchor" href="#hero">
          <img alt="Directional Pad Up" src={padUP} className={footerStyles.padUP} />
        </a>

    <div className={footerStyles.footMain}>
      <img src={Logo} alt="LevelUP Logo" />
    </div>
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className={footerStyles.footSocial}>
        <a href="https://www.facebook.com/LevelUPCodeWorks" target="_blank" rel="noopener">
          <span
            className={`${footerStyles.socialIcon} ${footerStyles.faceBook}`}
          ></span>
        </a>
          <a href="https://www.instagram.com/levelup_cw/" target="_blank" rel="noopener">
          <span
            className={`${footerStyles.socialIcon} ${footerStyles.instaGram}`}
          ></span>
        </a>
          <a href="https://twitter.com/LevelUP_CW" target="_blank" rel="noopener">
          <span
            className={`${footerStyles.socialIcon} ${footerStyles.twitTer}`}
          ></span>
        </a>
          <a href="https://www.linkedin.com/company/23748736" target="_blank" rel="noopener">
          <span
            className={`${footerStyles.socialIcon} ${footerStyles.linkeDin}`}
          ></span>
        </a>
      </div>
    </div>
    <div className={footerStyles.footerLinks}>
      <ul className={footerStyles.footerLinks1}>
        <li>
            <a href="https://www.af.mil/RSS/" target="_blank" rel="noopener">RSS</a>
        </li>
        <li>
            <a href="https://www.afinspectorgeneral.af.mil" target="_blank" rel="noopener">IG</a>
        </li>
        <li>
            <a href="https://www.foia.af.mil" target="_blank" rel="noopener">FOIA</a>
        </li>
        <li>
            <a href="https://www.resilience.af.mil/SAPR/" target="_blank" rel="noopener">SAPR</a>
        </li>
        <li>
          <a href="https://www.usa.gov">USA.gov</a>
        </li>
        <li>
            <a href="https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx" target="_blank" rel="noopener">
            Accessibility
          </a>
        </li>
        <li>
            <a href="https://www.af.mil/AF-Sites/" target="_blank" rel="noopener">AF Sites</a>
        </li>
      </ul>
      <ul className={footerStyles.footerLinks2}>
        <li>
          <a href="/">Link Disclaimer</a>
        </li>
        <li>
            <a href="https://www.af.mil/Portals/1/documents/AF_Executive_Fleet.pdf" target="_blank" rel="noopener">
            AF Executive Fleet
          </a>
        </li>
        <li>
            <a href="https://prhome.defense.gov/NoFear/" target="_blank" rel="noopener">No FEAR Act</a>
        </li>
        <li>
            <a href="https://www.archives.gov/about/plans-reports/performance-accountability" target="_blank" rel="noopener">
            Strategic APR
          </a>
        </li>
        <li>
            <a href="https://www.resilience.af.mil" target="_blank" rel="noopener">Suicide Prevention</a>
        </li>
        <li>
            <a href="https://www.af.mil/Equal-Opportunity/" target="_blank" rel="noopener">EEO</a>
        </li>
      </ul>
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
