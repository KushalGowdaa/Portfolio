import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import { AnimatePresence, motion } from 'framer-motion';
import MobileNav from './Components/MobileNav';
import Contact from './Components/Contact';

function App() {

    const [activeSection, setActiveSection] = useState('home');
    const [showContactModal, setShowContactModal] = useState(false);

    const renderSection = () => {
        switch (activeSection) {
            case 'home': return <Home />;
            case 'about': return <About />;
            case 'projects': return <Projects />;
            case 'experience': return <Experience />;
            default: return <Home />;
        }
    };
    

  return (
    
    <div className="App">
        <nav>
            <div className="logo">
                <h3 className="logo-img">KLG.</h3>
            </div>
            <div className="navigate">
                <ul className="nav-links">
                    <li className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')} style={{cursor:"pointer"}}>Home</li>
                    <li className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')} style={{cursor:"pointer"}}>About</li>
                    <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection('projects')} style={{cursor:"pointer"}}>Projects</li>
                    <li className={activeSection === 'experience' ? 'active' : ''} onClick={() => setActiveSection('experience')} style={{cursor:"pointer"}}>Experience</li> 
                    <li className="connect-btn" style={{cursor:"pointer"}} onClick={() => setShowContactModal(true)}>Connect</li>
                </ul>
            </div>
        </nav>

        <AnimatePresence mode="wait">
            <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                {renderSection()}
            </motion.div>
        </AnimatePresence>

        <Contact show = {showContactModal} onClose={() => setShowContactModal(false)}/>

            <p className='copyright'>© 2025 Kushal L Gowda</p>
        <MobileNav
                activeSection={activeSection}
                setActiveSection={section => {
                    if (section === 'connect') setShowContactModal(true);
                    else setActiveSection(section);
                }}
        />
        </div>
    );
}


export default App;
