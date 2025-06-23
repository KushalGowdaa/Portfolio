import React from "react";

const Experience = () => {
    const experience = [
        {
            role: "Full-Stack Java Developer",
            type: "Internship",
            company: "Tech Fortune Technologies",
            startTime: "Jan 2025",
            endTime: "May 2025",
            skills: ["Core and advanced Java", "Spring", "Spring Boot", "SQL", "MVC", "Multi Threading", "SDLC", "Git", "GitHub"],
            description : [
                "Developed a full-stack web application using Java, Spring Boot, MySQL, and React.js with MVC architecture and RESTful APIs.",
                "Implemented features like role-based access, dynamic forms, and real-time calling and views, ensuring robust functionality through active debugging.",
                "Collaborated in an Agile team, contributing to development and version control with Git and GitHub."
            ]
        },
        {
            role: "Python Web Developer",
            type: "Campus to Corporate Digital Academy",
            company: "Capgemini | ICT Academy",
            startTime: "Sep 2024",
            endTime: "Nov 2024",
            skills: ["Python", "Django", "Flask", "SQL", "MVC", "OAuth", "REST API", "Git", "GitHub"],
            description : [
                "Built web apps with Django and Flask, applying MVC patterns and RESTful APIs",
                "ntegrated OAuth authentication for secure access and gained expertice in database management and sql shell",
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
                                            {exp.skills.map((skill, i) => (
                                                <span className="exp-skill" key={i}>{skill}</span>
                                            ))}
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
                                            {exp.skills.map((skill, i) => (
                                                <span className="exp-skill" key={i}>{skill}</span>
                                            ))}
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