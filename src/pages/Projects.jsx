import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import { M_PLUS_2, Roboto } from '@next/font/google'

const roboto = Roboto({ 
    weight: '400',
    subsets: ['latin'],
  })
  const mplus2 = M_PLUS_2({ subsets: ['latin'] }) 
  
import project1 from '../../public/victory.png'
import project2 from '../../public/frame.png'
import project3 from '../../public/mcfacebook.png'

export default function Projects() {
    return (
        <div className={styles.projects_div}>
        <p id='projects' className={styles.why}>P R O J E C T S</p>
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
          <a href='https://github.com/tbfrobinson/Project_1' target='_blank' className={styles.project1_git}>Github</a>
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
    )
}