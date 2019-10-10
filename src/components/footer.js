import React from "react"
import PropTypes from "prop-types"

// import { COLORS } from "../styles/constants"
import Logo from "../images/LevelUp-Logo.png"

import footerStyles from '../styles/footer.module.scss'

const Footer = ({ siteTitle }) => (
  <footer className={footerStyles.footer}>
    <div className={footerStyles.directUP}>
      <span className={footerStyles.padUP }></span>

    </div>

    <div className={footerStyles.footMain}>
      <img src={Logo} alt="LevelUP Logo" />
    </div>
    <div style={{maxWidth: 500, margin: "auto"}}>
      <div className={footerStyles.footSocial}>
        <a href="https://www.facebook.com/LevelUPCodeWorks"><span className={`${footerStyles.socialIcon} ${footerStyles.faceBook}`}></span></a>
        <a href="https://www.instagram.com/levelup_cw/"><span className={`${footerStyles.socialIcon} ${footerStyles.instaGram}`}></span></a>
        <a href="https://twitter.com/LevelUP_CW"><span className={`${footerStyles.socialIcon} ${footerStyles.twitTer}`}></span></a>
        <a href="https://www.linkedin.com/company/23748736"><span className={`${footerStyles.socialIcon} ${footerStyles.linkeDin}`}></span></a>
      </div>
    </div>
    <div className={footerStyles.footerLinks}>
      <ul className={footerStyles.footerLinks1}>
        <li><a href="https://www.af.mil/RSS/">RSS</a></li>
        <li><a href="https://www.afinspectorgeneral.af.mil">IG</a></li>
        <li><a href="https://www.foia.af.mil">FOIA</a></li>
        <li><a href="https://www.resilience.af.mil/SAPR/">SAPR</a></li>
        <li><a href="https://www.usa.gov">USA.gov</a></li>
        <li><a href="https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx">Accessibility</a></li>
        <li><a href="https://www.af.mil/AF-Sites/">AF Sites</a></li>
      </ul>
      <ul className={footerStyles.footerLinks2}>
        <li><a href="/">Link Disclaimer</a></li>
        <li><a href="https://www.af.mil/Portals/1/documents/AF_Executive_Fleet.pdf">AF Executive Fleet</a></li>
        <li><a href="https://prhome.defense.gov/NoFear/">No FEAR Act</a></li>
        <li><a href="https://www.archives.gov/about/plans-reports/performance-accountability">Strategic APR</a></li>
        <li><a href="https://www.resilience.af.mil">Suicide Prevention</a></li>
        <li><a href="https://www.af.mil/Equal-Opportunity/">EEO</a></li>
      </ul>
    </div>
  </footer>
)


Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
