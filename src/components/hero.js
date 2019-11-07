import React from "react"
import PropTypes from "prop-types"
import { COLORS } from "../styles/constants"
import heroImage from "../images/heroBack.png"
import HeroLine from "../images/heroLine.png"
import ScrollAnimation from "react-animate-on-scroll"
import PadDwn from "../SVG/padDown.svg"

// import Jumbotron from 'react-bootstrap/Jumbotron'

import heroStyles from "../styles/hero.module.scss"

if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  require("smooth-scroll")('a[href*="#"]')
}

const Header = ({ siteTitle }) => {
  return (
    <div className={heroStyles.heroMain} id="hero">
      <div
        className={heroStyles.heroBanner}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(255, 255 , 255, .5), rgba(255, 255, 255, 0)), url(${heroImage})`,
          position: "absolute",
          backgroundSize: "cover",
          top: 0,
          right: 0,
          zIndex: -5,
          maxHeight: 1020,
          maxWidth: 1424,
          width: `100%`,
          height: `128%`,
          opacity: 1,
        }}
      />
      <div className={heroStyles.heroCont}>
        <ScrollAnimation animateIn="fadeIn">
          <h2
            className={heroStyles.heroTitle}
            style={{ color: COLORS.levelUpBlue }}
          >
            Revolutionizing
            <br />
            <span
              className={heroStyles.heroTitleBig}
              style={{ color: COLORS.levelUpPurple }}
            >
              Software <span className={heroStyles.heroTitleSmall}>for</span>
            </span>
            <br />
            America<span className={heroStyles.azoSans}>'</span>s Air force
          </h2>
        </ScrollAnimation>
        <img src={HeroLine} className={heroStyles.heroDivide} alt="" />
        <ScrollAnimation animateIn="fadeInUp">
          <h1 className={heroStyles.heroDes} style={{ color: COLORS.darkGray }}>
            <strong>LevelUP Code Works</strong> is a U.S. Air Force software
            development organization headquartered in San Antonio, Texas.
          </h1>
        </ScrollAnimation>
      </div>
      <div className={heroStyles.downPadWrapper}>
        <a rel="relativeanchor" href="#about">
          <div className={heroStyles.dwnPad}>
            <span
              className={`${heroStyles.padImg} ${heroStyles.padDwn}`}
            ></span>
          </div>
        </a>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header