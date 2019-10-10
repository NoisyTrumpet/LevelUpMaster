import React, {Component} from "react"
import courseStyles from "../styles/courses.module.scss"
import BodyLine from "../images/bodyLine.png"
import MissionImg from "../images/levelUP3.jpg"

import CirComp from "../images/cirCompIcon.png"
import BlkComp from "../images/blkCompIcon.png"
import HandIcon from "../images/handIcon.png"
import Mission from "./mission"


class MissionComp extends Component {
	render() {
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
							<p>Mission</p>
						</div>
						<img src={BodyLine} alt="" className={courseStyles.coursesDivide} />
						<div className={courseStyles.courseItem}>
							<img src={CirComp} alt="" />
							<p>Focus</p>
						</div>
						<div className={courseStyles.courseSpacer} />
						<div className={courseStyles.courseItem}>
							<img src={HandIcon} alt="" />
							<p>
								Real Time
								<br />
								Strategy
							</p>
						</div>
					</div>
				</div>
			</content>
		</div>
	}
}

export default MissionComp