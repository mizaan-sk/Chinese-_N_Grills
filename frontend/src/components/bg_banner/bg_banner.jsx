import React from 'react'
import styles from "./bg_banner.module.css"
// import banner_bg from "../../assets/bg_banner/bg_banner.png"
export const Bg_banner = ({name}) => {
  return (
    <div>
      <div className={styles.bg_banner}>
        <h1>{name}</h1>
      </div>
    </div>
  )
}

