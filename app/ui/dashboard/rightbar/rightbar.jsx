import React from 'react'
import styles from "./rightbar.module.css"
import { MdPlayCircleFilled } from 'react-icons/md'
import Image from 'next/image'
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Takees 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Pariatur aliquam, asperiores 
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Comming Soon 🌟</span>
          <h3 className={styles.title}>New server actions are available partial pre rendering is coming up</h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Pariatur aliquam, asperiores 
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Learn
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar