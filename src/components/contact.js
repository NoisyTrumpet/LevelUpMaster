import React from "react"

import BodyLine from "../images/bodyLine.png"
import Email from "../images/icons/emailIcon.svg"

import contactStyles from "../styles/contact.module.scss"

const Contact = () => {
	return (
		<div className={contactStyles.contact}>
  <div >

    <div className={`${contactStyles.contactInfo} ${contactStyles.contactCont}`}>
      <h3>Get in Touch</h3>
        <ul>
          <li><img src={Email} alt="" className={contactStyles.emailIcon} />AFLCMC.HNCP.LevelUP@us.af.mil</li>
        </ul>
    </div>

  </div>

  <img src={BodyLine} alt="" className={contactStyles.contactLine} />

</div>
	)
}

export default Contact