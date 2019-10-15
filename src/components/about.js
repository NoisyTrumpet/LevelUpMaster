import React from "react"
import { COLORS } from "../styles/constants"

import SideLine from "../images/sideLine.png"
import BodyLine from "../images/bodyLine.png"

import aboutStyles from "../styles/about.module.scss"
import ScrollAnimation from "react-animate-on-scroll"

const About = () => {
  return (
    <div id="about" className={aboutStyles.aboutMain}>
      <h2 className={aboutStyles.aboutSect}>About</h2>
      <div className={aboutStyles.mobBack}>
        <div className={aboutStyles.mobCont}>
          <h2 className={aboutStyles.cardSubTitle}>
            {" "}
            Change
            <br />
            the Game <br />
            <img src={BodyLine} alt="" />{" "}
          </h2>
          <p>
            <strong>LevelUP</strong> combines commercial best practices with DoD
            resources to code rapidly deployable software solutions. By
            embracing a startup model that replaces bureaucracy with innovation
            and collaboration, we’re pushing boundaries to transform the future
            and protect the security of the United States.
          </p>
        </div>
      </div>

      <div className={aboutStyles.cardSect}>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
            left: 0,
            overflow: "visible",
          }}
        >
          <div className={aboutStyles.cards}>
            <div className={aboutStyles.skewCard}>
              <div className={aboutStyles.cardCont}>
                <h2 className={aboutStyles.cardSubTitle}>
                  {" "}
                  Change
                  <br />
                  the Game <br />
                  <img src={BodyLine} alt="" />{" "}
                </h2>
                <p>
                  <strong>LevelUP</strong> combines commercial best practices
                  with DoD resources to code rapidly deployable software
                  solutions. By embracing a startup model that replaces
                  bureaucracy with innovation and collaboration, we’re pushing
                  boundaries to transform the future and protect the security of
                  the United States.
                </p>
              </div>
            </div>
          </div>

          <div className={aboutStyles.cards}>
            <div className={aboutStyles.skewCardBack}></div>
          </div>

          <div className={aboutStyles.cards}>
            <div className={aboutStyles.sideLine}>
              <ScrollAnimation animateIn="fadeInRight">
                <img src={SideLine} alt="" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <div
        className={aboutStyles.bottomSect}
        style={{ color: COLORS.levelUpBlue }}
      >

        <h2>
          We're not just here to{" "}
          <span style={{ color: COLORS.levelUpPurple }}>
            change the
            <br />
            game.
          </span>{" "}
          We're here to
          <br />
          <ScrollAnimation
      animateIn="fadeIn">
          <span className={aboutStyles.botChan1}>Win it</span>
          </ScrollAnimation>
        </h2>
        
        <img src={BodyLine} alt="" className={aboutStyles.bottomLine} />
      </div>
    </div>
  )
}

export default About
