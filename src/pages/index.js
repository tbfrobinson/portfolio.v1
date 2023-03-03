import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import { M_PLUS_2, Roboto } from '@next/font/google'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import project1 from '../../public/victory.png'
import project2 from '../../public/frame.png'
import project3 from '../../public/mcfacebook.png'
import me from '../../public/personalphoto.jpeg'

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
          </ul>
        </nav>
        <div className={styles.thinking_box}>
          <h1 className={styles.thinking_negative_1}>'I was thinking something that said 'Theo Robinson''</h1>
          <h1 className={styles.thinking0}>'I was thinking something that said 'Theo Robinson''</h1>
          <h1 className={styles.thinking1}>'I was thinking something that said 'Theo Robinson''</h1>
          <h1 className={styles.thinking2}>'I was thinking something that said <a href='https://www.linkedin.com/in/tbfrobinson/' target='_blank'><span className={styles.name} onMouseEnter={nameChange} onMouseLeave={nameBack}>'Theo Robinson'</span></a>'</h1>
        </div>
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
          <p className={styles.about4}><span className={mplus2.className}>My current goal is to conclude the copying period of my coding career and begin to understand abstract problems.</span></p>
          <p className={styles.about4point5}><span className={mplus2.className}>(see what i was saying)</span></p>
        </div>
        <div className={styles.projects_div}>
          <p id='projects' className={styles.why}>L I K E, W H Y  D O  I C A R E</p>
          <p className={styles.why1}>jeez okay okay i'll get to the point</p>
          <div>
            <div className={styles.project1}>
              <Image 
                className={styles.project1_img}
                src={project1}
                alt='the victory screen from my first project, a floating, dead head surrounded by gold'
                />
            </div>
            <p className={styles.project1_title}><span className={roboto.className}>THE Official Saving the World video Game™ real</span></p>
            <div className={styles.project1_desc}>
              <p className={styles.project1_text}>My first project, a janky canvas game inspired by <a href='https://kayin.itch.io/iwbtg' target='_blank' className={styles.iwb_link}>I wanna be the guy</a> and <a href='https://delicious-fruit.com/ratings/game_details.php?id=11890' target='_blank' className={styles.iwb_link}>I wanna be the boshy</a>.</p>
              <p className={styles.project1_text}> Guide Atlas in retrieving his stolen head. Original art and music.</p>
            </div>
            <a href='https://github.com/tbfrobinson/Project_1' target='_blank' className={styles.project1_git}>Check out the messy code</a>
            <a href='https://tbfrobinson.github.io/Project_1/' target='_blank' className={styles.project1_link}>Lemme play</a>
          </div>
          <div>
            <div className={styles.project2}>
              <Image 
                  src={project2}
                  alt='the corner of a frame featured in my second project, AI generated'
                  width={450}
                  height={430}
                />
            </div>
            <p className={styles.project2_title}><span className={roboto.className}>Online Gallery</span></p>
            <div className={styles.project2_desc}> 
              <p className={styles.project2_text}>My second project, a social art gallery that utilizes the Met Art Collection API.</p>
              <p className={styles.project2_text}>Create an account and save art to your collection, see other users' collections.</p>
            </div>
            <a href='https://github.com/tbfrobinson/project2' target='_blank' className={styles.project2_git}>Github</a>
            <a href='https://online-gallery2.herokuapp.com/' target='_blank' className={styles.project2_link}>Check it out</a>
          </div>
          <div>
            <div className={styles.project3}>
              <Image 
                    src={project3}
                    alt='An AI generated image of a ronald mcdonald looking character skipping over apps, weird representation of my third project'
                    width={450}
                    height={440}
                  />
            </div>
            <p className={styles.project3_title}><span className={roboto.className}>McFaceBook</span></p>

            <div className={styles.project3_desc}> 
              <p className={styles.project3_text}>My first group project, working with three others to create an app where users can create posts.</p>
              <p className={styles.project3_text}>Made using React.js, MongoDB, Express, and Node.js.</p>
            </div>
            <a href='https://github.com/tbfrobinson/project2' target='_blank' className={styles.project3_git}>Github</a>
            <a href='https://online-gallery2.herokuapp.com/' target='_blank' className={styles.project3_link}>Check it out</a>
          </div>
        </div>
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
