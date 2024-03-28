import React from 'react'
import css from "./signup.module.css"
const Stepper = ({count}) => {
  return (
    <div className={css.stepContainer}>
            <div className={css.stepLine} style={{
                width:`${count}%`,
                transition:"all 1s"
            }}>
            
            </div>
            <span className={css.stepCounter}>{count}%</span>
    </div>
  )
}

export default Stepper