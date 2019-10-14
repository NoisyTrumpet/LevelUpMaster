import React from "react"

import fedStyles from "../styles/federal.module.scss"

const Federal = () => {
  return (
    <div className={fedStyles.federal} id="collaborate">
      <div className={fedStyles.federalMain}>
        <div className={fedStyles.federalback}>
          <div className={fedStyles.federalCont}>
            <h3>
              Let<span style={{ fontFamily: "azo-sans-web" }}>'</span>s<br />
              Team Up
            </h3>

            <p>
              Want to collaborate with <strong>LevelUP</strong> or the USAF?
              <br />
              Check out our federal bussiness opportunities.
            </p>

            <div className={fedStyles.fedButton}>
              <a href="https://www.fbo.gov/" rel="noopener noreferrer" target="_blank">
                <button>
                <h4>LevelUP</h4>
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Federal
