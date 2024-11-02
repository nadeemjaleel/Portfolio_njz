"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { AnimatePresence } from 'framer-motion';
import Header from '../../ccomponents/Header';
import Preloader from '../../ccomponents/Preloader';
import Landing from '../../ccomponents/Landing';


export default function Home() {

    const [isLoading, setIsLoading] = useState(true);
  
    useEffect( () => {
      (
        async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll();
  
            setTimeout( () => {
              setIsLoading(false);
              document.body.style.cursor = 'default'
              window.scrollTo(0,0);
            }, 2000)
        }
      )()
    }, [])
    

    return (
        <main className={styles.main}>
            <Header />
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader />}
            </AnimatePresence>
            <Landing />
        </main>
    )
}    