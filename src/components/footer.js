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
        <img
          alt="Directional Pad Up"
          src={padUP}
          className={footerStyles.padUP}
        />
      </a>

      <div className={footerStyles.footMain}>
        <img src={Logo} alt="LevelUP Logo" />
      </div>
      <div style={{ maxWidth: 500, margin: "auto" }}>
        <div className={footerStyles.footSocial}>
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
      </div>
      <div className={footerStyles.footerLinks}>
        <ul className={footerStyles.footerLinks1}>
          <li>
            <a href="https://www.af.mil/RSS/" rel="noopener noreferrer" target="_blank">
              RSS
            </a>
          </li>
          <li>
            <a
              href="https://www.afinspectorgeneral.af.mil"
              rel="noopener noreferrer"
              target="_blank"
            >
              IG
            </a>
          </li>
          <li>
            <a href="https://www.foia.af.mil" rel="noopener noreferrer" target="_blank">
              FOIA
            </a>
          </li>
          <li>
            <a
              href="https://www.resilience.af.mil/SAPR/"
              rel="noopener noreferrer"
              target="_blank"
            >
              SAPR
            </a>
          </li>
          <li>
            <a href="https://www.usa.gov" rel="noopener noreferrer" target="_blank">
              USA.gov
            </a>
          </li>
          <li>
            <a
              href="https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx"
              rel="noopener noreferrer"
              target="_blank"
            >
              Accessibility
            </a>
          </li>
          <li>
            <a
              href="https://www.af.mil/AF-Sites/"
              rel="noopener noreferrer"
              target="_blank"
            >
              AF Sites
            </a>
          </li>
        </ul>
        <ul className={footerStyles.footerLinks2}>
          <li>
            <a
              href="https://www.af.mil/Disclaimer.aspx"
              rel="noopener noreferrer"
              target="_blank"
            >
              Link Disclaimer
            </a>
          </li>
          <li>
            <a
              href="https://www.af.mil/Portals/1/documents/AF_Executive_Fleet.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              AF Executive Fleet
            </a>
          </li>
          <li>
            <a
              href="https://prhome.defense.gov/NoFear/"
              rel="noopener noreferrer"
              target="_blank"
            >
              No FEAR Act
            </a>
          </li>
          <li>
            <a
              href="https://www.archives.gov/about/plans-reports/performance-accountability"
              rel="noopener noreferrer"
              target="_blank"
            >
              Strategic APR
            </a>
          </li>
          <li>
            <a
              href="https://www.resilience.af.mil"
              rel="noopener noreferrer"
              target="_blank"
            >
              Suicide Prevention
            </a>
          </li>
          <li>
            <a
              href="https://www.af.mil/Equal-Opportunity/"
              rel="noopener noreferrer"
              target="_blank"
            >
              EEO
            </a>
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