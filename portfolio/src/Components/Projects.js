import React from "react";
import { useState } from "react";
import ProfilePic from "../images/newProfile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt, faGithub, faJava, faJs, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faBolt, faChevronDown, faChevronUp, faDatabase, faLeaf, faNetworkWired, faRocket, faServer, faTowerBroadcast, faUpRightFromSquare, faDiagramProject, faGlobe, faB, faDrawPolygon } from "@fortawesome/free-solid-svg-icons";
import {motion, AnimatePresence} from "framer-motion";
import LinkPreview from "./LinkPreviewer";

const Projects = () => {

    const projects = {
        MentorMe: {
            title: "🧑‍🏫 MentorMe – Real-Time 1-on-1 Mentorship Platform",
            description: "MentorMe is a full-stack web app enabling real-time mentorship via live video, chat, and screen sharing with real-time task assignment and task monitoring.",
            TechStack:[
                "Java", "React.js","Spring Boot", "REST", "Agora RTM", "Web-socket", "MySQL"
            ],
            features: [
                "🧩 Built backend with Spring Boot (MVC + REST APIs), featuring secure auth, role-based access, and session scheduling.",
                "🧠 Integrated WebRTC + Agora SDK for live video conferencing and screen sharing.",
                "🧑‍🎨 Designed a modular, responsive frontend using React Hooks.",
                "🗃️ Managed real-time data and user tasks with MySQL and custom notifications."
            ],
            Output:"This project strengthened my understanding of full-stack development and also gave me practical experience in designing real-world communication platforms.",
            liveLink: "Sorry no preview available"
        },
        Pricely: {
            title: "🛍️ Pricely – Indian E-commerce Price Comparison",
            description:
                "Pricely is a full-stack web application that enables users to search, compare, and shop products across Indian platforms like Amazon and Flipkart, using real-time pricing data.",

            TechStack: [
                "Python", "Django", "React.js", "RapidAPI", "Bootstrap", "Render"
            ],

            features: [
                "🔍 Integrated Amazon and Flipkart data using RapidAPI to fetch real-time product prices.",
                "💡 Designed and built a responsive frontend using React.js and Bootstrap for clean UI and quick search interactions.",
                "🛠️ Developed a backend using Django to handle API proxying, product search logic, and secure data flow.",
                "☁️ Deployed the full app using Render for cloud hosting and Vercel for frontend hosting."
            ],

            Output:
                "Pricely gave me hands-on experience in building scalable, real-world price aggregation platforms. It sharpened my skills in API integration, frontend responsiveness, and full-stack deployment workflows.",

            liveLink: "https://pricely-kappa.vercel.app/"
        },
        QuantC: {
            title: "🌱 QuantC – Carbon Footprint Quantification for Indian Coal Mines",
            description:
                "QuantC is a full-stack environmental analytics platform that quantifies and monitors carbon emissions from daily mining operations in Indian coal mines. It enables stakeholders to visualize data, analyze emission gaps, and track progress toward carbon neutrality.",

            TechStack: [
                "Python", "Django", "React.js", "Supabase"
            ],

            features: [
                "🌍 Designed a data-driven system to calculate carbon emissions based on excavation, fuel use, electricity consumption, and transportation.",
                "📊 Integrated React-based frontend with interactive dashboards for live emission and carbon sink visualization.",
                "🧠 Implemented machine learning-based suggestions to help companies identify strategies for reducing their carbon footprint.",
                "☁️ Used Supabase for backend storage and real-time syncing of mine-level environmental data."
            ],

            Output:
                "This project deepened my knowledge in combining full-stack development with environmental impact analysis. I gained experience in building real-time dashboards, carbon quantification models, and tools that drive sustainability in industrial systems.",

            liveLink: "https://github.com/KushalGowdaa/carbon_emissions.git" 
        }

    }

    const [openIndex, setOpenIndex] = useState(0);

    const handleAccordian = (idx) => {
        if(openIndex !== idx) setOpenIndex(idx);
    }

    return (
        <div className='content-container'>
            <div className='content'>
                <div className='projects-col1'>
                    <h2 style={{color:"blue", textAlign:"center"}}>Projects</h2>
                    <div className='Project-list-container'>
                        <ol className="projects-list">
                            {Object.entries(projects).map(([projectName, projectDesc], idx) => (
                                <li className="projects" key={projectName}>
                                    <div className="accordian-item">
                                        <div className="accordian-title" onClick={() => handleAccordian(idx)}>
                                            <span>{projectName}</span>
                                            <span style={{ float: "right" }}>
                                                {openIndex === idx ? <FontAwesomeIcon icon={faChevronUp} style={{color:"#0000ff"}}/> : <FontAwesomeIcon icon={faChevronDown} style={{color:"#0000ff"}}/> }
                                            </span>
                                        </div>
                                        <AnimatePresence initial={false}>
                                        {
                                            openIndex === idx && (
                                                <motion.div className="acordian-content" 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                                style={{ overflow: "hidden" }}>
                                                    <h4>{projectDesc.title}</h4>
                                                    <ul className="tech-stack">
                                                        {
                                                            projectDesc.TechStack.map((tech, i) => (
                                                                <li className="tech" key={i}>
                                                                    {tech === "React.js" && (
                                                                        <FontAwesomeIcon icon={faReact} style={{color: "#63E6BE"}} />
                                                                    )}
                                                                    {tech === "Java" && (
                                                                        <FontAwesomeIcon icon={faJava
                                                                        } style={{color: "#7143f9",}} /> 
                                                                    )}
                                                                    {tech === "Python" && (
                                                                        <FontAwesomeIcon icon={faPython} style={{color: "#7143f9",}} /> 
                                                                    )}
                                                                    {tech === "JavaScript" && (
                                                                        <FontAwesomeIcon icon={faJs} style={{color: "#7143f9",}} /> 
                                                                    )}
                                                                    {tech === "Spring Boot" && (
                                                                        <FontAwesomeIcon icon={faLeaf} style={{color: "#00b34d",}} />
                                                                    )}
                                                                    {tech === "Django" && (
                                                                        <FontAwesomeIcon icon={faRocket} style={{color: "#7143f9",}} /> 
                                                                    )}
                                                                    {tech === "Node.js" && (
                                                                        <FontAwesomeIcon icon={faNodeJs} style={{color: "#00b34d",}} /> 
                                                                    )}
                                                                    {tech === "REST" && (
                                                                        <FontAwesomeIcon icon={faNetworkWired} style={{color: "#00b34d",}} /> 
                                                                    )}
                                                                    {tech === "MySQL" && (
                                                                        <FontAwesomeIcon icon={faDatabase} style={{color: "#00b34d",}} /> 
                                                                    )}
                                                                    {tech === "PostgreSQL" && (
                                                                        <FontAwesomeIcon icon={faServer} style={{color: "#00b34d",}} /> 
                                                                    )}
                                                                    {tech === "Supabase" && (
                                                                        <FontAwesomeIcon icon={faBolt} style={{color: "#00b34d",}} /> 
                                                                    )}
                                                                    {tech === "Git" && (
                                                                        <FontAwesomeIcon icon={faGitAlt} style={{color: "#f5ab0a",}} /> 
                                                                    )}
                                                                    {tech === "GitHub" && (
                                                                        <FontAwesomeIcon icon={faGithub} style={{color: "#000000",}} /> 
                                                                    )}
                                                                    {tech === "Web-socket" && (
                                                                        <FontAwesomeIcon icon={faTowerBroadcast} style={{color: "#0000ff",}} /> 
                                                                    )}
                                                                    {tech === "RapidAPI" && (
                                                                        <FontAwesomeIcon icon={faGlobe} style={{color: "#0000ff",}} /> 
                                                                    )}
                                                                    {tech === "Bootstrap" && (
                                                                        <FontAwesomeIcon icon={faB} style={{color: "#0000ff",}} /> 
                                                                    )}
                                                                    {tech === "Render" && (
                                                                        <FontAwesomeIcon icon={faDrawPolygon} style={{color: "#0000ff",}} /> 
                                                                    )}
                                                                    {" " + tech}
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                    <p className="project-desc">{projectDesc.description}</p>
                                                    <ul className="project-features">
                                                        {
                                                            projectDesc.features.map((feature, i) => (
                                                                <li key = {i}>{feature}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                    <p className="project-output">{projectDesc.Output}</p>
                                                    <p className="project-link-container">
                                                        <a href={projectDesc.liveLink} className="live-link-btn" target="_blank">
                                                            {
                                                                projectName === 'Pricely' && (
                                                                    <span>See it Live <FontAwesomeIcon icon={faUpRightFromSquare} color="#0000f"/></span>
                                                                )
                                                            }
                                                            {
                                                                projectName === 'QuantC' &&(
                                                                    <span>
                                                                        Visit Github <FontAwesomeIcon icon={faUpRightFromSquare} color="#0000f"/>
                                                                    </span>
                                                                )
                                                            }
                                                            {
                                                                projectName === "MentorMe" && (
                                                                    <span>Ongoing</span>
                                                                )
                                                            }
                                                        </a>
                                                    </p>
                                                </motion.div>
                                            )
                                        }
                                        </AnimatePresence>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className='col2'>
                   {

                    openIndex !== null && projects[Object.keys(projects)[openIndex]].liveLink && projects[Object.keys(projects)[openIndex]].liveLink !== "Sorry no preview available" ? (
                        <LinkPreview url={projects[Object.keys(projects)[openIndex]].liveLink} />
                    ):(
                        <div className="project-preview-placeholder">
                            <h1><FontAwesomeIcon icon={faDiagramProject} size="2xl" style={{color: "#0000ff",}} /></h1>
                            <h3 className="placeholder-text">choose a project to view its preview.</h3>
                        </div>)
                   }
                   
                    {/* <img className='profile-pic' src={ProfilePic} alt="Profile" /> */}
                </div>
            </div>
        </div>
    );
}

export default Projects;