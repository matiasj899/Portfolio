import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/profile-pic.png'
import cloud from '../public/cloud.png'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Matias Juarez Dev</title>
        <meta name="description" content="Matias Juarez Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <ul>
            <li>
              <a className={styles.links}>About</a>
            </li>
            <li>
              <a className={styles.links} href='#projects'>Projects</a>
            </li>
            <li>
              <a className={styles.links}>Contact</a>
            </li>
          </ul>



        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.titleAndImg}>
        <h1>Hi, I'm Matias Juarez</h1>
        <h2> Frontend developer</h2>
        <p>Knowledge  in web applications, landing pages and responsive design development.</p>
        <button>Contact me <span className={styles.buttonIcon}></span></button>
        </div>
       
        <Image src={profilePic} alt='Matias Juarez' width={300} height={300} quality={100} />
      </main>
      <div className={styles.cloudContainer}>
        <Image src={cloud} alt='cloud' />
       
      </div>
      <section>
      <h2 id='projects'>Projects</h2>
      <div>

        <a  href='https://ilovegifos.netlify.app/'  target='_blank' rel='a'>a</a>
      </div>
      </section>
      


    </div>
  )
}

export default Home
