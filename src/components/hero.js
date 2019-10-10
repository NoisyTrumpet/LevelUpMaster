import React from "react"
import PropTypes from "prop-types"
import { COLORS } from "../styles/constants"
import heroImage from "../images/heroBack.png"
import HeroLine from "../images/heroLine.png"
import ScrollAnimation from "react-animate-on-scroll"



// import Jumbotron from 'react-bootstrap/Jumbotron'

import heroStyles from '../styles/hero.module.scss'

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  require('smooth-scroll')('a[href*="#"]');
}

const Header = ({ siteTitle }) => {
  return (

	<div className={heroStyles.heroMain}>
    <div className={heroStyles.heroBanner} style={{
        backgroundImage: `url(${heroImage})`,
        position: "absolute",
        backgroundSize: "cover",
        top: 0,
        right: 0,
        zIndex: -5,
        maxHeight: 1020,
        maxWidth: 1424,
        width: `100%`,
        height: `100%`,
        opacity: 1,
    }}/>
    <div className={heroStyles.heroCont}>
        <ScrollAnimation animateIn="fadeIn">
          <h2 className={heroStyles.heroTitle} style={{color: COLORS.levelUpBlue}}>
          Be bold<br/><span className={heroStyles.heroTitleBig} style={{color: COLORS.levelUpPurple}}>Act Now</span><br/>Learn <span className={heroStyles.heroTitleSmall}>and</span> Adapt</h2>
        </ScrollAnimation>
        <img src={HeroLine} className={heroStyles.heroDivide} alt="" />
        <h1 className={heroStyles.heroDes} style={{color: COLORS.darkGray}}>
          <strong>LevelUP Code Works</strong> is a U.S. Air Force software development outfit in San Antonio, Texas.
        </h1>

    </div>

    <div className={heroStyles.gradient}>
      <a rel="relativeanchor" href="#about">
        <div className={heroStyles.dwnPad}>
      <span className={`${heroStyles.padImg} ${heroStyles.padDwn}`}></span>
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
