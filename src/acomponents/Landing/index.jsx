'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import profilePic from '../../../public/images/IMG_9615.jpeg';

export default function Home() {


  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <div className={styles.container}>
      <header className={styles.header}>
        <h1>Helping brands thrive <br />in the digital world</h1>
      </header>
    </div>  
    </motion.main>
  )
}
