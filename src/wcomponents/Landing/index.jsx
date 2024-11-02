'use client'
import styles from './style.module.scss'
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import Rounded from '../../common/RoundedButton';

export default function Home() {
    
  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <div className={styles.container}>
      <header className={styles.header}>
        <h1>Creating next level <br />digital products</h1>
      </header>
      </div>
    </motion.main>
  )
}
