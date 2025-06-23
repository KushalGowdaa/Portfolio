import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCode, faProjectDiagram, faBriefcase, faEnvelope, faHandshake } from "@fortawesome/free-solid-svg-icons";
import Contact from "./Contact";

const MobileNav = ({activeSection, setActiveSection}) => {
    return (
        <div className="mobile-nav-container">
            <nav className='mobile-nav'>
                <button onClick = {()=> setActiveSection("home")} className={activeSection === "home" ? "active" : ""}><FontAwesomeIcon icon={faHome} color="#0000ff"/><span>Home</span></button>
                <button onClick={() => setActiveSection("about")} className={activeSection === "about" ? "active" : ""}><FontAwesomeIcon icon={faUser} color="#0000ff" /><span>About</span></button>
                <button onClick={() => setActiveSection("projects")} className={activeSection === "projects" ? "active" : ""}><FontAwesomeIcon icon={faProjectDiagram} color="#0000ff" /><span>Projects</span></button>
                <button onClick={() => setActiveSection("experience")} className={activeSection === "experience" ? "active" : ""}><FontAwesomeIcon icon={faBriefcase} color="#0000ff" /><span>Experience</span></button>
                <button onClick={() => setActiveSection("connect")} className={activeSection === "connect" ? "active" : ""}><FontAwesomeIcon icon={faHandshake} color="#0000ff" /><span>Connect</span></button>  
            </nav>
        </div>
    );
}

export default MobileNav;