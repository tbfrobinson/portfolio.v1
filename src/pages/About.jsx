import styles from '@/styles/Home.module.css'
import { M_PLUS_2, Roboto } from '@next/font/google'
const mplus2 = M_PLUS_2({ subsets: ['latin'] }) 

export default function About() {
  return (
    <div  className={styles.about_div}>
          <h1 id='about' className={styles.who_text}><span className={mplus2.className}>Who even is that??</span></h1>
          <p className={styles.about}><span className={mplus2.className}>I'm pretty awful at bragging, but</span></p>
          <p className={styles.about1}><span className={mplus2.className}>I am exceptional at procrastination</span></p>
          <div className={styles.about_bullet1}></div>
          <p className={styles.about2}><span className={mplus2.className}>A G.A. bootcamp has helped me transition into coding after 12 years studying clarinet performance.</span></p>
          <p className={styles.about2point5}><span className={mplus2.className}>(the pandemic helped me stop playing seriously and swap)</span></p>
          <div className={styles.about_bullet2}></div>
          <p className={styles.about3}><span className={mplus2.className}>Music helped me develop my collaborative, creative, and problem solving skills.</span></p>
          <p className={styles.about3point5}><span className={mplus2.className}>(more buzz words to come)</span></p>
          <div className={styles.about_bullet3}></div>
          <p className={styles.about4}><span className={mplus2.className}>My current goal is to conclude the copying period of my coding career and begin to approach abstract problems with creative solutions.</span></p>
          <p className={styles.about4point5}><span className={mplus2.className}>(see what i was saying)</span></p>
        </div>
  );
}