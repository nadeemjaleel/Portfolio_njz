'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import Rounded from '../../common/RoundedButton';
import profilePic from '../../../public/images/IMG_9615.jpeg';

export default function Home() {


  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <>
      <div className={styles.body}>
        <div className={`${styles.container} ${styles.medium}`}>
          <div className={`${styles.row} ${styles.once}`} style={{ transform: 'translate(0px, 0vh)' }}>
            <div className={styles.flexcol}>
              <h1>
                <span>
                  <div className={styles.profilepicture}></div>
                  Let's start a
                </span>
                <span>project together</span>
              </h1>
              {/* <h1>Let's start a  <br />project together</h1> */}
            </div>
            <div className={styles.flexcol}>
              <div className={styles.profilepicture}></div>
            </div>
          </div>
          <div className={`${styles.row} ${styles.once}`} style={{ transform: 'translate(0px, 0vh)' }}>
            <div className={styles.flexcol}>
                <form className={styles.form}>
                    <div className={styles.formcol}>
                      <h5>01</h5>
                      <label className={styles.label} >What's your name?</label>
                      <input className={styles.field} type="text" required placeholder='John Cena *' />
                    </div>
                    <div className={styles.formcol}>
                      <h5>02</h5>
                      <label className={styles.label} >What's your email?</label>
                      <input className={styles.field} type="email" required placeholder='youcantsee@johncena.com' />
                    </div>
                    <div className={styles.formcol}>
                      <h5>03</h5>
                      <label className={styles.label} >What's the name of your organization?</label>
                      <input className={styles.field} type="text" required placeholder='John Doe ®' />
                    </div>
                    <div className={styles.formcol}>
                      <h5>04</h5>
                      <label className={styles.label} >What services are you looking for?</label>
                      <input className={styles.field} type="text" required placeholder='Web Design, Web Development...' />
                    </div>
                    <div className={styles.formcol}>
                      <h5>05</h5>
                      <label className={styles.label} >Your message</label>
                      <textarea className={styles.field} type="text" required placeholder='Hello Nadeem, can you help me with...*' />
                    </div>
                    <div className={styles.btnsend}>
                        <div data-scroll data-scroll-speed={0.1}>
                        <Rounded className={styles.button} >
                        <p>Send It!</p>
                        </Rounded>
                        </div>
                    </div>
                </form>
            </div>
            <div className={styles.flexcol}>
                <h5>CONTACT DETAILS</h5>
                <ul className={styles.linkswrap}>
                  <li className={`${styles.btn} ${styles.btnlink}`}>
                    <a href='mailto:nadeemjaleel1346@gmail.com'>
                      <span>nadeemjaleel1346@gmail.com</span>
                    </a>
                  </li>
                  <li className={`${styles.btn} ${styles.btnlink}`}>
                    <a href='tel:+918848999510'>
                      <span>+91 88 48 99 95 10</span>
                    </a>
                  </li>
                </ul>
                <h5>BUSINESS DETAILS</h5>
                <ul className={styles.linkswrap}>
                  <li className={`${styles.btn} ${styles.btnlink}`}>
                    <a href='mailto:nadeemjaleel1346@gmail.com'>
                      <span>nadeemjaleel1346@gmail.com</span>
                    </a>
                  </li>
                  <li className={`${styles.btn} ${styles.btnlink}`}>
                    <a href='tel:+918848999510'>
                      <span>+91 88 48 99 95 10</span>
                    </a>
                  </li>
                </ul>
                <h5>SOCIAL MEDIA</h5>
                <ul className={styles.linkswrap}>
                  <li className={`${styles.btn} ${styles.btnlink}`}>
                    <a href='mailto:nadeemjaleel1346@gmail.com'>
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li className={`${styles.btn} ${styles.btnlink}`}>
                    <a href='tel:+918848999510'>
                      <span>LinkedIn</span>
                    </a>
                  </li>
                </ul>
            </div>
          </div>
      </div>
      </div>
      </>  
    </motion.main>
  )
}
