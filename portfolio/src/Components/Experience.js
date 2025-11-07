import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt, faGithub, faJava, faJs, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faB, faBolt, faCode, faDatabase, faDrawPolygon, faGlobe, faLeaf, faNetworkWired, faRocket, faServer, faShield } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Experience = () => {
    const experience = [
        {
            role: "Full-Stack Java Developer",
            type: "Internship",
            company: "Tech Fortune Technologies",
            startTime: "Jan 2025",
            endTime: "May 2025",
            skills: ["Core and advanced Java", "JavaScript", "Spring", "Spring Boot", "SQL","REST API", "MVC", "Multi Threading", "SDLC", "Git", "GitHub"],
            description : [
                "Designed and developed a full-stack mentorship platform for students and mentors using Java, Spring Boot and MySQL, employing MVC architecture and RESTful APIs, demonstrating end-to-end ownership of API development, web-services implementation, and database design. ",
                "Implemented a component-based UI using React.js with optimized rendering practices, integrated WebRTC for serverless live video calls",
                "Created and integrated features such as role-based access, data forms, and dynamic views, while actively debugging across the stack to ensure smooth functionality.",
                "Worked in an Agile environment managing code development, debugging, and version control using Git and GitHub.",
            ]
        },
        {
            role: "Python Web Developer",
            type: "Campus to Corporate Digital Academy",
            company: "Capgemini | ICT Academy",
            startTime: "Sep 2024",
            endTime: "Nov 2024",
            skills: ["Python", "Django", "Flask", "SQL", "MVC", "OAuth", "React.js", "REST API", "Git", "GitHub"],
            description : [
                "Built web apps with Django and Flask, applying MVC patterns and RESTful APIs",
                "Integrated OAuth authentication for secure access and gained expertice in database management and sql shell",
                "Led a team to develop a price comparison website"
            ]
        }
    ];

    return (
        <div className="content-container">
            <div className="exp-content">
                <h2 style={{textAlign:"center", color:"blue"}}>Experience</h2>
                <div className="timeline">
                    {experience.map((exp, idx) => (
                        <div className={`timeline-row ${idx % 2 === 0 ? "left" : "right"}`} key={idx}>
                            {/* Left side */}
                            <div className="timeline-side">
                                {idx % 2 === 0 && (
                                    <div className="exp-card">
                                        <div className="exp-header">
                                            <h3 className="exp-role">{exp.role}</h3>
                                            <div className="exp-time">{exp.startTime} - {exp.endTime}</div>
                                        </div>
                                        <div className="exp-type-cont"><span className="exp-type">{exp.type}</span></div>
                                        <div className="exp-company">{exp.company}</div>
                                        <div className="exp-skills">
                                            {exp.skills.map((skill, i) => {
                                                let icon = null;
                                                if (skill === "React.js") {
                                                    icon = <FontAwesomeIcon icon={faReact} style={{color: "#63E6BE"}} />;
                                                } else if (skill === "Core and advanced Java") {
                                                    icon = <FontAwesomeIcon icon={faJava} style={{color: "#7143f9"}} />;
                                                } else if (skill === "Python") {
                                                    icon = <FontAwesomeIcon icon={faPython} style={{color: "#7143f9"}} />;
                                                } else if (skill === "JavaScript") {
                                                    icon = <FontAwesomeIcon icon={faJs} style={{color: "#7143f9"}} />;
                                                } else if (skill === "Spring Boot") {
                                                    icon = <FontAwesomeIcon icon={faLeaf} style={{color: "#00b34d"}} />;
                                                } else if (skill === "Spring") {
                                                    icon = <FontAwesomeIcon icon={faLeaf} style={{color: "#00b34d"}} />;
                                                } else if (skill === "Django") {
                                                    icon = <FontAwesomeIcon icon={faRocket} style={{color: "#7143f9"}} />;
                                                } else if (skill === "Node.js") {
                                                    icon = <FontAwesomeIcon icon={faNodeJs} style={{color: "#00b34d"}} />;
                                                } else if (skill === "REST API") {
                                                    icon = <FontAwesomeIcon icon={faNetworkWired} style={{color: "#00b34d"}} />;
                                                } else if (skill === "SQL") {
                                                    icon = <FontAwesomeIcon icon={faDatabase} style={{color: "#00b34d"}} />;
                                                }  else if (skill === "Git") {
                                                    icon = <FontAwesomeIcon icon={faGitAlt} style={{color: "#f5ab0a"}} />;
                                                } else if (skill === "GitHub") {
                                                    icon = <FontAwesomeIcon icon={faGithub} style={{color: "#000000"}} />;
                                                } else if (skill === "Multi Threading") {
                                                    icon = <FontAwesomeIcon icon={faCode} style={{color: "#0000ff"}} />;
                                                } 
                                                return (
                                                    <span className="exp-skill" key={i}>
                                                        {icon} {skill}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                        <ul className="exp-desc">
                                            {exp.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            {/* Center line and dot */}
                            <div className="timeline-center">
                                <div className="timeline-dot" />
                                {idx !== experience.length - 1 && <div className="timeline-vert-line" />}
                            </div>
                            {/* Right side */}
                            <div className="timeline-side">
                                {idx % 2 !== 0 && (
                                    <div className="exp-card">
                                        <div className="exp-header">
                                            <h3 className="exp-role">{exp.role}</h3>
                                            <div className="exp-time">{exp.startTime} - {exp.endTime}</div>
                                        </div>
                                        <div className="exp-type-cont"><span className="exp-type">{exp.type}</span></div>
                                        <div className="exp-company">{exp.company}</div>
                                        <div className="exp-skills">
                                            {exp.skills.map((skill, i) => {
                                                let icon = null;

                                                if (skill === "React.js") {
                                                    icon = <FontAwesomeIcon icon={faReact} style={{color: "#63E6BE"}} />;
                                                } else if (skill === "Python") {
                                                    icon = <FontAwesomeIcon icon={faPython} style={{color: "#7143f9"}} />;
                                                } else if (skill === "Django") {
                                                    icon = <FontAwesomeIcon icon={faRocket} style={{color: "#7143f9"}} />;
                                                } else if (skill === "REST API") {
                                                    icon = <FontAwesomeIcon icon={faNetworkWired} style={{color: "#00b34d"}} />;
                                                } else if (skill === "SQL") {
                                                    icon = <FontAwesomeIcon icon={faDatabase} style={{color: "#00b34d"}} />;
                                                }  else if (skill === "Git") {
                                                    icon = <FontAwesomeIcon icon={faGitAlt} style={{color: "#f5ab0a"}} />;
                                                } else if (skill === "GitHub") {
                                                    icon = <FontAwesomeIcon icon={faGithub} style={{color: "#000000"}} />;
                                                } else if (skill === "OAuth") {
                                                    icon = <FontAwesomeIcon icon = {faShield} style={{color:"0000ff"}}/>
                                                }

                                                return (
                                                    <span className="exp-skill" key={i}>
                                                        {icon} {skill}
                                                    </span>
                                                );
                                                
                                            })}
                                        </div>
                                        <ul className="exp-desc">
                                            {exp.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;