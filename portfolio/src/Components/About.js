import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBolt, faDatabase, faLeaf, faNetworkWired, faRocket, faServer} from "@fortawesome/free-solid-svg-icons";
import { faReact, faHtml5, faCss3Alt, faBootstrap, faJava, faNodeJs, faPython, faJs, faGitAlt, faGithub, faArtstation, faAws} from "@fortawesome/free-brands-svg-icons";
import {motion} from "framer-motion";


const About = () => {

    const skills = {
        Programming: ['Java', 'Python', 'JavaScript'],
        Frontend: ['React.js', 'HTML', 'CSS', 'Bootstrap'],
        Backend: [ 'Spring Boot', 'Django', 'Node.js', "REST-API's"],
        Databases: ['MySQL', 'PostgreSQL', 'Supabase'],
        Tools: ['Git', 'GitHub', 'Canva'],
        Cloud: ['AWS'],
    }
    const containVariety = {
        hidden: {opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4
            }
        }
    };

    const Items = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y:0, transition: {duration: 0.6, ease: "easeOut"}}
    };
    
    return (
        <div className='content-container'>
            <div className='content'>
                <div className='col1'>
                    <div className='About'>
                        <h2 style={{fontSize:"40px", color:"blue", textAlign:"center", margin:"0px"}}>About me</h2>
                        <motion.div variants={containVariety} initial="hidden" animate="visible">

                            <motion.p variants={Items}>
                                I'm Kushal L Gowda, a recent graduate in Information Science Engineering from Sambhram Institute of Technology, with a strong foundation in full-stack web development and a CGPA of 8.88/10.
                            </motion.p>
                            <motion.p variants={Items}>
                                Over the course of my academic journey and independent learning, I’ve built several meaningful projects that allowed me to apply both frontend and backend skills. Some of the key projects I’ve worked on include <strong>MentorMe</strong>, a real-time mentorship platform with video calling and chat functionality, and Pricely, a product price comparison tool that fetches live data from major e-commerce platforms. These experiences have helped me develop a solid understanding of web architecture, API integration, and responsive design.
                            </motion.p>
                            <motion.p variants={Items}>
                                I’ve worked with tools and technologies such as <strong>Django, React.js, Java, Spring Boot, Supabase, MySQL, PostgreSQL, and cloud platforms like Render and AWS</strong>. I also have experience working in a collaborative environment using Git and GitHub, which has strengthened my communication and team skills.
                            </motion.p>
                            <motion.p variants={Items}>
                                As a fresher, I’m enthusiastic about learning, open to new challenges, and committed to building clean, functional, and user-friendly applications. I'm currently looking for opportunities where I can grow as a developer and contribute to impactful projects.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
                <div className='col2'>
                    {/* <h1>Skills</h1> */}
                    <div className='skill-set-content'>
                        <h2 style={{textAlign:"center" ,fontSize:"40px", color:"blue", margin:"0px"}}>Skills</h2>
                        <motion.div variants={containVariety} initial="hidden" animate="visible" className="skill-set">
                            {Object.entries(skills).map(([category, items]) => (
                                <motion.div key={category} variants={Items} className="Category-skill-container">
                                    <h2 style={{margin:"0px", color:"blue", paddingLeft:"8px", textWrap:"wrap"}}>
                                        
                                        {category}
                                        
                                    </h2>
                                    <ul className="skills-list">
                                    {
                                        items.map((skill) => (
                                            <li key={skill} className="skill">
                                                {skill === "React.js" && (
                                                    <FontAwesomeIcon icon={faReact} style={{color: "#63E6BE",}} /> 
                                                )}
                                                {skill === "HTML" && (
                                                    <FontAwesomeIcon icon={faHtml5} style={{color: "#ff1900",}} /> 
                                                )}
                                                {skill === "CSS" && (
                                                    <FontAwesomeIcon icon={faCss3Alt} style={{color: "#FFD43B",}} /> 
                                                )}
                                                {skill === "Bootstrap" && (
                                                    <FontAwesomeIcon icon={faBootstrap} style={{color: "#7143f9",}} /> 
                                                )}
                                                {skill === "Java" && (
                                                    <FontAwesomeIcon icon={faJava} style={{color: "#7143f9",}} /> 
                                                )}
                                                {skill === "Python" && (
                                                    <FontAwesomeIcon icon={faPython} style={{color: "#7143f9",}} /> 
                                                )}
                                                {skill === "JavaScript" && (
                                                    <FontAwesomeIcon icon={faJs} style={{color: "#7143f9",}} /> 
                                                )}
                                                {skill === "Spring Boot" && (
                                                    <FontAwesomeIcon icon={faLeaf} style={{color: "#00b34d",}} />
                                                )}
                                                {skill === "Django" && (
                                                    <FontAwesomeIcon icon={faRocket} style={{color: "#7143f9",}} /> 
                                                )}
                                                {skill === "Node.js" && (
                                                    <FontAwesomeIcon icon={faNodeJs} style={{color: "#00b34d",}} /> 
                                                )}
                                                {skill === "REST-API's" && (
                                                    <FontAwesomeIcon icon={faNetworkWired} style={{color: "#00b34d",}} /> 
                                                )}
                                                {skill === "MySQL" && (
                                                    <FontAwesomeIcon icon={faDatabase} style={{color: "#00b34d",}} /> 
                                                )}
                                                {skill === "PostgreSQL" && (
                                                    <FontAwesomeIcon icon={faServer} style={{color: "#00b34d",}} /> 
                                                )}
                                                {skill === "Supabase" && (
                                                    <FontAwesomeIcon icon={faBolt} style={{color: "#00b34d",}} /> 
                                                )}
                                                {skill === "Git" && (
                                                    <FontAwesomeIcon icon={faGitAlt} style={{color: "#f5ab0a",}} /> 
                                                )}
                                                {skill === "GitHub" && (
                                                    <FontAwesomeIcon icon={faGithub} style={{color: "#000000",}} /> 
                                                )}
                                                {skill === "Canva" && (
                                                    <FontAwesomeIcon icon={faArtstation} style={{color: "#7149e9",}} /> 
                                                )}
                                                {skill === "AWS" && (
                                                    <FontAwesomeIcon icon={faAws} style={{color: "#bd6e00",}} /> 
                                                )}
                                                {" "+skill} 
                                            </li>
                                        ))
                                    } 
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About;