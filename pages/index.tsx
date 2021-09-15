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
import linkedin from "../public/linkedin-brands.svg"
import { lazy, useState } from "react";

const projects = [
  {
    id: 1,
    name: "Podcast channel",
    img: "/podcast-channel.png",
    link: "https://podcast-and-more.netlify.app/",
    git:"https://github.com/matiasj899/Podcast-Channel-",
    description:
      "Project focused on the layout of the landing page of a Podcast channel. Developed with Html and Css.",
  },
  {
    id: 2,
    name: "Gifos",
    img: "/Gifos.png",
    link: "https://ilovegifos.netlify.app/",
    git:"https://github.com/matiasj899/IloveGIFOS",
    description:
      "This project consists in the creation of an interactive web application to search, save and share gifs. Developed with Html,Css and Javascript.",
  },
  {
    id: 3,
    name: "Artfol",
    img: "/artfol.png",
    link: "https://artfol.netlify.app/",
    git:"https://github.com/matiasj899/IloveGIFOS",
    description:
      "Landing page development following the visual guides of a given user interface. Developed with Html,Css and Javascript.",
  },
  {
    id: 4,
    name: "Calculator",
    img: "/calculator.png",
    link: "https://calculadora-react-redux.netlify.app/",
    git:"https://github.com/matiasj899/Calculadora-redux",
    description:
      "Calculator, allow to do basic math operations. Developed with React and Redux.",
  },
  {
    id: 5,
    name: "Rooftop challenge",
    img: "/rooftop-challenge.png",
    link: "https://rooftop-frontend-challenge.netlify.app/",
    git:"https://github.com/matiasj899/Rooftop-challenge-frontend",
    description:
      "Final project for Rooftop company academy. Developed with React and Typescript.",
  },{
    id: 6,
    name: "Advanced calculator",
    img: "/advanced-calculator.png",
    link: "https://advanced-calculator.netlify.app/",
    git:"https://github.com/matiasj899/calculadora-avanzada",
    description:
      "Advanced calculator made por Rooftop academy. Developed with React Hooks.",
  },
  {
    id: 7,
    name: "Data warehouse",
    img: "/advanced-calculator.png",
    link: "https://advanced-calculator.netlify.app/",
    git:"https://github.com/matiasj899/calculadora-avanzada",
    description:
      "Advanced calculator made por Rooftop academy. Developed with React Hooks.",
  },
  
];

const Home: NextPage = () => {
  const [skillsState1, setSkillsState1] = useState(false);
  const [skillsState2, setSkillsState2] = useState(false);
  const [skillsState3, setSkillsState3] = useState(false);

  const projectData = projects.map((project) => {
    return (
      <div key={project.id} className={styles.projectCn}>
        <p className={styles.projectTitle}>{project.name}</p>
        <a href={project.link} target="_blank" rel="noreferrer">
          <Image
            src={project.img}
            alt={project.name}
            width={220}
            height={140}
            quality={100}
            className={styles.projectsImg}
          ></Image>
        </a>
        <div className={styles.projectDescAndBtn}>
          <p>{project.description}</p>
          <div className={styles.codeAndDemoBtn}>
          <a href={project.git} target="_blank" rel="noreferrer" className={styles.codeBtn}>
            Code
            <span className={styles.demoArrow}></span>
          </a>
          <a href={project.link} target="_blank" rel="noreferrer">
            Demo
            <span className={styles.demoArrow}></span>
          </a>
          </div>
         
        </div>
      </div>
    );
  });
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
              <a className={styles.links} href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className={styles.links} href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.titleAndImg}>
          <h1>Hi, Im Matias Juarez</h1>
          <h2>Frontend developer</h2>
          <p>
            Specialized in web applications,landing pages and modern websites
            development, implementing responsive design and mobile first vision.
          </p>
       
            <a href='#contact' className={styles.homeButton}>
            Contact me <span className={styles.buttonIcon}></span>
            </a>
           
        
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
        <p className={styles.subtitle}>My recent work</p>
        <div className={styles.projectDataCn}>{projectData}</div>
      </section>
      <div className={styles.cloudFlex}> 
      <div className={styles.cloudContainer}>
        <Image src={CloudInvert} alt="cloud" loading='lazy' />
      </div>
      </div>
      
      <section id="contact" className={styles.contactSection}>
        <h2>Contact me</h2>
        <p className={styles.subtitle}>Get in touch</p>
        <div className={styles.contactCn}>
          <div className={styles.waysToContactCn}>
            <div className={styles.waysToContact}>
              <Image src={phone} alt="phone" width={25} height={25}></Image>
              <div className={styles.aditionalInfo}>
                <p className={styles.principalInfo}>Call me</p>
                <p className={styles.secondaryInfo}>011-26513070</p>
              </div>
            </div>
            <div className={styles.waysToContact}>
              <Image src={email} alt="email" width={25} height={25}></Image>
              <div className={styles.aditionalInfo}>
                <p className={styles.principalInfo}>Email</p>
                <p className={styles.secondaryInfo}>matiasjuarez899@gmail.com</p>
              </div>
            </div>
            <div className={styles.waysToContact}>
              <Image src={location} alt="email" width={25} height={25}></Image>
              <div className={styles.aditionalInfo}>
                <p className={styles.principalInfo}>Location</p>
                <p className={styles.secondaryInfo}>Buenos Aires, Argentina.</p>
              </div>
            </div>
            <div className={styles.waysToContact}>
            <a href='https://www.linkedin.com/in/matias-juarez-dev/'target="_blank" rel="noreferrer" >
            <Image src={linkedin} alt="email" width={25} height={25}>
                
                </Image>
            </a>
              
             
            </div>
          </div>
          <form>
            <div className={styles.textAndEmailInput}>
              <label>
                Name
                <input type="text" className={styles.inputWidth}></input>
              </label>
              <label>
                Email
                <input type="email" className={styles.inputWidth}></input>
              </label>
            </div>
            <div className={styles.projectAndMessage}>
              <label>
                Project
                <input type="text"></input>
              </label>
              <label>
                Message
                <textarea></textarea>
              </label>
            </div>
            <button className={styles.sendMessage}>Send message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
