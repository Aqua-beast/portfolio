import React, {useEffect, useState} from 'react'
import './Resume.css'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import Sidebar from '../Sidebar/Sidebar'

function Resume() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id='resume' className={`resume-box ${scrolling ?'scrolling':''}`}>
            <Sidebar />
            <div className='scroller'>
                <Education  />
                <Skills  />
            </div>
        </div>
    )
}

export default Resume
