"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Header from '../../acomponents/Header';
import Preloader from '../../acomponents/Preloader'
import Landing from '../../acomponents/Landing';
import { AnimatePresence } from 'framer-motion';

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