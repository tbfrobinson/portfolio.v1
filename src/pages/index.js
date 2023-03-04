import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import About from './About'
import Projects from './Projects'
import { M_PLUS_2, Roboto } from '@next/font/google'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import me from '../../public/personalphoto.jpg'

import styles from '@/styles/Home.module.css'

const roboto = Roboto({ 
  weight: '400',
  subsets: ['latin'],
})
const mplus2 = M_PLUS_2({ subsets: ['latin'] }) 

export default function Home() {
  let [name, setName] = useState([`'Rheodore'`, `'Feckett'`, `'Benner'`, `'Tobinson'`])
  let [iterations, setIterations] = useState(0)

  let year = new Date().getFullYear()
  
  let nameChange = e => {
    if (iterations > 3) {
      e.target.innerText = `'Theo Robinson'`
    }
    else {e.target.innerText = name[iterations]}
  }
  
  let nameBack = e => {
    e.target.innerText = `'Theo Robinson'`
    if (iterations > 3) {
      setIterations(0)
    }
    else {setIterations(iterations + 1)}
    
  }
  return (
    <>
      <div className={styles.app1}>
        <div>
          <p className={styles.real_title}>T<span className={styles.smaller_name}>heodore</span> B<span className={styles.smaller_name}>eckett</span> F<span className={styles.smaller_name}>enner</span> R<span className={styles.smaller_name}>obinson</span></p>
          <div className={styles.animation_div}>
            <p className={styles.title}>Theodore Robinson</p>
            <p className={styles.title2}>Theodore Robinson</p>
            <p className={styles.title3}>Theodore Robinson</p>
            <p className={styles.title7}>Theodore Robinson</p>
            <p className={styles.title4}>Theodore Robinson</p>
            <p className={styles.title5}>Theodore Robinson</p>
            <p className={styles.title6}>Theodore Robinson</p>
            <p className={styles.title8}>Theodore Robinson</p>
            <p className={styles.title9}>Theodore Robinson</p>
            <p className={styles.title10}>Theodore Robinson</p>
            <p className={styles.title11}>Theodore Robinson</p>
          </div>
        </div>
        <nav>
          <ul className={styles.navBar}>
            <li className={styles.nav_item}><a href='#about'>about</a></li>
            <li className={styles.nav_item}><a href='#projects'>things done</a></li>
            <li className={styles.nav_item}><a href='#contact'>contact</a></li>
            <li className={styles.nav_item}><Link href='/TheodoreRobinsonResume.pdf' target='_blank'>resume</Link></li>
          </ul>
        </nav>
        <div className={styles.thinking_box}>
          <h1 className={styles.thinking_negative_1}>'I was thinking something that said 'Theo Robinson''</h1>
          <h1 className={styles.thinking0}>'I was thinking something that said 'Theo Robinson''</h1>
          <h1 className={styles.thinking1}>'I was thinking something that said 'Theo Robinson''</h1>
          <h1 className={styles.thinking2}>'I was thinking something that said <a href='https://www.linkedin.com/in/tbfrobinson/' target='_blank'><span className={styles.name} onMouseEnter={nameChange} onMouseLeave={nameBack}>'Theo Robinson'</span></a>'</h1>
        </div>
          <About />
          <Projects />
        <div id='contact' className={styles.contact_div}>
          <Image 
            className={styles.me}
            src={me}
            alt='a picture of me, theo robinson, in a sleeping bag'
          />
          <Link href='/TheodoreRobinsonResume.pdf' target='_blank'>
            <div className={styles.resume}>Resume</div>
          </Link>
          <p className={styles.contact_phone}>Phone: (818) 730-0149</p>
          <p className={styles.contact_email}>Email: tbfrobinson@gmail.com</p>
          <a href='https://github.com/tbfrobinson' target='_blank'><AiFillGithub className={styles.github}/></a>
          <a href='https://www.linkedin.com/in/tbfrobinson/' target='_blank'><AiFillLinkedin className={styles.linkedin}/></a>
        <div className={styles.footer}>Powered by Next.js.  |  Copyright © {year} Theo Robinson</div>
        </div>
      </div>
    </>
  )
}
