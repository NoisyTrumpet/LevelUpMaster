import React, { Fragment, useState } from "react"
import { COLORS } from "../styles/constants"

import BodyLine from "../images/bodyLine.png"
import MissionImg from "../images/levelUP3.jpg"
import FocusImg from "../images/focus.jpg"
import RealTimeStrategyImg from "../images/realTime.jpg"
import ScrollAnimation from "react-animate-on-scroll"

import FocusIcon from "../SVG/focus.svg"
import MissionIcon from "../SVG/mission.svg"
import HandIcon from "../SVG/realTime.svg"


import courseStyles from "../styles/courses.module.scss"

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState("mission")

  return (

    <div id="courses" className={courseStyles.courseMain}>
      <h2
        className={courseStyles.coursesSect}
        style={{ color: COLORS.levelUpPurple }}
      >
        Code
        <span style={{ fontSize: "2.5rem", color: COLORS.levelUpBlue }}>
          {" "}
          for the
        </span>{" "}
        win
      </h2>

      <div className={courseStyles.cardSectCourse}>
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
          <div
            className={courseStyles.skewCardCourse}
            style={{
              backgroundImage: `url(${
                selectedCourse === "mission"
                  ? MissionImg
                  : selectedCourse === "focus"
                  ? FocusImg
                  : selectedCourse === "realTimeStrategy"
                  ? RealTimeStrategyImg
                  : null
              })`,
            }}
          >
            <div className={courseStyles.cardContCourse}>
              {selectedCourse === "mission" && (
                <p>
                  <strong>LevelUP’s</strong> directive is to serve as a software
                  factory to support a full range of Air Force and DoD missions.
                </p>
              )}

              {selectedCourse === "focus" && (
                <p style={{ fontSize: "22px" }}>
                  Although our initial area of focus supports a range of Air
                  Force missions, LevelUP will broaden its software development
                  services to other functional areas. This includes a Unified
                  Platform that will allow greater operational capabilities
                  between the U.S. Air Force, U.S. Army, U.S. Navy, U.S. Marines
                  and U.S. Coast Guard.
                </p>
              )}

              {selectedCourse === "realTimeStrategy" && (
                <p style={{ fontSize: "23px" }}>
                  By developing software using agile processes and the latest
                  DevSecOps technology, we’re creating innovative capabilities
                  at the scale and speed of need.
                </p>
              )}
            </div>
          </div>
          <ScrollAnimation animateIn="fadeInRight">
          <div className={courseStyles.skewCardBackCourse}>
            <div className={courseStyles.courses}>
              <div
                className={courseStyles.courseItem}
                onClick={() => setSelectedCourse("mission")}

              >
                <MissionIcon className={courseStyles.missionIcon} />
                <p className={courseStyles.courseTextP}>Mission</p>
              </div>
              <ScrollAnimation animateIn="fadeInUp">
                <img
                  src={BodyLine}
                  alt=""
                  className={courseStyles.coursesDivide}
                  style={{
                    opacity: selectedCourse === "mission" && 1,
                  }}
                />
              </ScrollAnimation>

              <div
                className={courseStyles.courseItem}
                onClick={() => setSelectedCourse("focus")}
              >
                <FocusIcon className={courseStyles.focusIcon} />
                <p className={courseStyles.courseTextP}>Focus</p>
              </div>
              <ScrollAnimation animateIn="fadeInUp">
                <img
                  src={BodyLine}
                  alt=""
                  className={courseStyles.coursesDivide}
                  style={{
                    opacity: selectedCourse === "focus" && 1,
                  }}
                />
              </ScrollAnimation>

              <div className={courseStyles.courseSpacer} />
              <div
                className={courseStyles.courseItem}
                onClick={() => setSelectedCourse("realTimeStrategy")}
              >
                <HandIcon className={courseStyles.realTimeIcon} />
                <p className={courseStyles.courseTextP}>
                  Real Time
                  <br />
                  Strategy
                </p>
              </div>
              <ScrollAnimation animateIn="fadeInUp">
                <img
                  src={BodyLine}
                  alt=""
                  className={courseStyles.coursesDivide}
                  style={{
                    opacity: selectedCourse === "realTimeStrategy" && 1,
                  }}
                />
              </ScrollAnimation>
            </div>
          </div>
          </ScrollAnimation>


        </div>
      </div>

      <div className={courseStyles.mobBackCourses}>
        <div className={courseStyles.mobContCourses}>
          {selectedCourse === "mission" && (
            <Fragment>
              <img src={MissionImg} alt="" />
              <p>
                <strong>LevelUP’s</strong> directive is to serve as a software
                factory to support a full range of Air Force and DoD missions.
              </p>
            </Fragment>
          )}

          {selectedCourse === "focus" && (
            <Fragment>
              <img src={FocusImg} alt="" />
              <p>
                Although our initial area of focus supports a range of Air Force
                missions, LevelUP will broaden its software development services
                to other functional areas. This includes a Unified Platform that
                will allow greater operational capabilities between the U.S. Air
                Force, U.S. Army, U.S. Navy, U.S. Marines and U.S. Coast Guard.
              </p>
            </Fragment>
          )}

          {selectedCourse === "realTimeStrategy" && (
            <Fragment>
              <img src={RealTimeStrategyImg} alt="" />
              <p>
                By developing software using agile processes and the latest
                DevSecOps technology, we’re creating innovative capabilities at
                the scale and speed of need.
              </p>
            </Fragment>
          )}
        </div>
        <div className={courseStyles.mobSectCourses}>
          <ul>
            <li>
              <div
                className={courseStyles.courseItem}
                onClick={() => setSelectedCourse("mission")}
              >
                <MissionIcon className={courseStyles.missionIcon} />
                <p>Mission</p>
              </div>
            </li>
            <img
              src={BodyLine}
              alt=""
              className={courseStyles.coursesDivide}
              style={{
                opacity: selectedCourse === "mission" && 1,
              }}
            />

            <li>
              <div
                className={courseStyles.courseItem}
                onClick={() => setSelectedCourse("focus")}
              >
                <FocusIcon className={courseStyles.focusIcon} />
                <p>Focus</p>
              </div>
            </li>
            <img
              src={BodyLine}
              alt=""
              className={courseStyles.coursesDivide}
              style={{
                opacity: selectedCourse === "focus" && 1,
              }}
            />

            <div className={courseStyles.courseSpacer} />
            <li>
              <div
                className={courseStyles.courseItem}
                onClick={() => setSelectedCourse("realTimeStrategy")}
              >
                <HandIcon className={courseStyles.realTimeIconMobile} />
                <p>
                  Real Time
                  <br />
                  Strategy
                </p>
              </div>
            </li>
            <img
              src={BodyLine}
              alt=""
              className={courseStyles.coursesDivide}
              style={{
                opacity: selectedCourse === "realTimeStrategy" && 1,
              }}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Courses
