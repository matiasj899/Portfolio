import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import profilePic from "../public/profile-pic.png";
import cloud from "../public/cloud.png";
import CloudInvert from "../public/cloud-Copy.png";
import phone from "../public/mobile-alt-solid.svg";
import email from "../public/envelope-regular.svg";
import location from "../public/map-marker-alt-solid.svg";
import { useState } from "react";

const projects=[
  {
    id:1,
    name:'Podcast channel',
    img:'/podcast-channel.png',
    link:"https://podcast-and-more.netlify.app/"
  },
  {
    id:2,
    name:'Gifos',
    img:'/Gifos.png',
    link:"https://ilovegifos.netlify.app/"
  },
  {
    id:3,
    name:'Artfol',
    img:'/artfol.png',
    link:"https://artfol.netlify.app/"
  }
]

const Home: NextPage = () => {
  const [skillsState1, setSkillsState1] = useState(false);
  const [skillsState2, setSkillsState2] = useState(false);
  const [skillsState3, setSkillsState3] = useState(false);

  const projectData= projects.map((project)=>{
    return(
      <div key={project.id}>
        <a href={project.link} target='_blank' rel="noreferrer">
       
        <Image src={project.img} alt={project.name} width={220} height={140} quality={100} className={styles.projectsImg} ></Image>
        
        </a>
<p>{project.name}</p>
      </div>
    )
  })
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
              <a className={styles.links} href="#projects">
                Projects
              </a>
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
          <p>
            Specialized in web applications,landing pages and modern websites
            development, implementing responsive design and mobile first vision.
          </p>
          <button>
            Contact me <span className={styles.buttonIcon}></span>
          </button>
        </div>

        <Image
          src={profilePic}
          alt="Matias Juarez"
          width={300}
          height={300}
          quality={100}
        />
      </main>
      <div className={styles.cloudContainer}>
        <Image src={cloud} alt="cloud" />
      </div>
      <section id={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.skillsCn}>
          <div className={styles.eachSkillsCn}>
            <div className={styles.titleAndBtnCn}>
              <div className={styles.titleCn}>
                <p>Soft</p>
              </div>

              <div className={styles.seeMoreBtnCn}>
                <button
                  className={styles.seeMoreBtn}
                  onClick={() => setSkillsState1(!skillsState1)}
                ></button>
              </div>
            </div>

            {skillsState1 ? (
              <ul>
                <li>Communication </li>
                <li>Teamwork</li>
                <li>Critical thinking</li>
                <li>Empathy</li>
                <li>Agile methodologies</li>
              </ul>
            ) : null}
          </div>
          <div className={styles.eachSkillsCn}>
            <div className={styles.titleAndBtnCn}>
              <div className={styles.titleCn}>
                <p>Frontend</p>
              </div>

              <div className={styles.seeMoreBtnCn}>
                <button
                  className={styles.seeMoreBtn}
                  onClick={() => setSkillsState2(!skillsState2)}
                ></button>
              </div>
            </div>

            {skillsState2 ? (
              <ul>
                <li>Html5</li>
                <li>Css3</li>
                <li>Javascript</li>
                <li>React.Js</li>
                <li>Responsive design</li>
              </ul>
            ) : null}
          </div>
          <div className={styles.eachSkillsCn}>
            <div className={styles.titleAndBtnCn}>
              <div className={styles.titleCn}>
                <p>Backend</p>
              </div>

              <div className={styles.seeMoreBtnCn}>
                <button
                  className={styles.seeMoreBtn}
                  onClick={() => setSkillsState3(!skillsState3)}
                ></button>
              </div>
            </div>

            {skillsState3 ? (
              <ul>
                <li>Node.Js</li>
                <li>Express.Js</li>
                <li>Sequelize</li>
                <li>MongoDb</li>
                <li>Mysql</li>
              </ul>
            ) : null}
          </div>
        </div>
      </section>
      <section id="portfolio">
<h2>Portfolio</h2>
<p>My recent works</p>
<div>
  {projectData}
</div>


      </section>
      <section id="contact">
        <h2>Contact me</h2>
        <p>Get in touch</p>
        <div className={styles.contactCn}>
          <div className={styles.waysToContactCn}>
            <div className={styles.waysToContact}>
              <Image src={phone} alt="phone" width={30} height={30}></Image>
              <div>
                <p>Call me</p>
                <p>011-26513070</p>
              </div>
            </div>
            <div className={styles.waysToContact}>
              <Image src={email} alt="email" width={30} height={30}></Image>
              <div>
                <p>Email</p>
                <p>matiasjuarez899@gmail.com</p>
              </div>
            </div>
            <div className={styles.waysToContact}>
              <Image src={location} alt="email" width={30} height={30}></Image>
              <div>
                <p>Location</p>
                <p>Buenos Aires, Argentina.</p>
              </div>
            </div>
          </div>
          <form>
            <div>
            <label>
              Name
              <input type="text"></input>
            </label>
            <label>
              Email
              <input type="email"></input>
            </label>
            </div>
         <div>
         <label>
              Project
              <input type="text"></input>
            </label>
            <label>
              Message
              <textarea></textarea>
            </label>
           </div>            
            <button>Send message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
