import React, {useState} from "react";
import ProfilePic from "../images/newProfile.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import useTypingEffect from "../hooks/useTypingEffect";
import resume from "../Resume/Kushal_Resume.pdf";
import Contact from "./Contact";


const Home = () => {

    const [showContactModal, setShowContactModal] = useState(false);
    const typingText = useTypingEffect([
        "Software Engineer",
        "Full Stack Developer",
        "Tech Enthusiast"
    ]);

    const LinkedInUrl = "https://www.linkedin.com/in/kushal-l-gowda-5984a7253/";
    const gitHubUrl = "https://github.com/KushalGowdaa";

    return (
        <div className='content-container'>
            <div className='content'>
                <div className='col1'>
                    <div className='Intro'>
                        <p><span style={{color: "blue", fontSize:"60px"}}>Hello</span>,<br/><span className='name'>I'm Kushal Gowda</span></p>
                        <p className="my-specs">
                            {typingText}
                            <span className='cursor'></span>
                        </p>
                        <div className='btn-container'>
                            <button style={{border:"none"}} onClick={() => setShowContactModal(true)}><FontAwesomeIcon icon={faEnvelope} size="lg"/> Connect</button>
                            <a href={resume} target="_blank" download="Kushal_resume.pdf">
                                <button style={{cursor:"pointer", border:"none"}}><FontAwesomeIcon icon={faDownload} size="lg"/> Resume</button>
                            </a>
                        </div>
                        <div className='socials'>
                                    
                            <li><a href={LinkedInUrl} target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{color: "#0a66c2",}}  /></a></li>
                            <li><a href={gitHubUrl} target='_blank'><FontAwesomeIcon icon={faSquareGithub}  style={{color: "#000000",}} /></a></li>
                            {/* <li><FontAwesomeIcon icon={faSquareGithub} style={{color: "#000000",}} /></li> */}
                        </div>
                    </div>
                </div>
                <div className='col2'>
                    <img className='profile-pic' src={ProfilePic} loading="lazy" />
                </div>
            </div>
            <Contact show = {showContactModal} onClose={() => setShowContactModal(false)}/>
        </div>
    );

}

export default Home;