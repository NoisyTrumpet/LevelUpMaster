import React from "react"
import { COLORS } from "../styles/constants"

import BodyLine from "../images/bodyLine.png"
import MissionImg from "../images/levelUP3.jpg"

import CirComp from "../images/cirCompIcon.png"
import BlkComp from "../images/blkCompIcon.png"
import HandIcon from "../images/handIcon.png"

import courseStyles from "../styles/courses.module.scss"

const Courses = () => {
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
      <content
        style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
          left: 0,
          overflow: "visible",
        }}
      >
        <div className={courseStyles.skewCardCourse}>
          <div className={courseStyles.cardContCourse}>
            <p>
              LevelUP’s directive is to serve as a software factory to support a
              full range of Air Force and DoD missions.
            </p>
          </div>
        </div>

        <div className={courseStyles.skewCardBackCourse}>
          <div className={courseStyles.courses}>
            <div className={courseStyles.courseItem}>
              <img src={BlkComp} alt="" />
              <p className={courseStyles.courseTextP}>Mission</p>
            </div>
            <img src={BodyLine} alt="" className={courseStyles.coursesDivide} />
            <div className={courseStyles.courseItem}>
              <img src={CirComp} alt="" />
              <p className={courseStyles.courseTextP}>Focus</p>
            </div>
            <div className={courseStyles.courseSpacer} />
            <div className={courseStyles.courseItem}>
              <img src={HandIcon} alt="" />
              <p className={courseStyles.courseTextP}>
                Real Time
                <br />
                Strategy
              </p>
            </div>
          </div>
        </div>
      </content>
    </div>

    <div className={courseStyles.mobBackCourses}>
      <div className={courseStyles.mobContCourses}>
        <img src={MissionImg} alt="" />
        <p>
          <strong>LevelUP’s</strong> directive is to serve as a software factory
          to support a full range of Air Force and DoD missions.
        </p>
      </div>
      <div className={courseStyles.mobSectCourses}>
        <ul>
          <li>
            <div className={courseStyles.courseItem}>
              <img src={BlkComp} alt="" />
              <p>Mission</p>
            </div>
          </li>
          <img src={BodyLine} alt="" className={courseStyles.coursesDivide} />
          <li>
            <div className={courseStyles.courseItem}>
              <img src={CirComp} alt="" />
              <p>Focus</p>
            </div>
          </li>
          <div className={courseStyles.courseSpacer} />
          <li>
            <div className={courseStyles.courseItem}>
              <img src={HandIcon} alt="" />
              <p>
                Real Time
                <br />
                Strategy
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Courses
