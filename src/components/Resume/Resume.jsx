import React, {useEffect, useState} from 'react'
import './Resume.css'
import Education from '../Education/Education'
// import Exp from '../Exp/Exp'
import Skills from '../Skills/Skills'
import Sidebar from '../Sidebar/Sidebar'

function Resume() {
    const [scrolling, setScrolling] = useState(false);
    const [active, setActive] = useState('');

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

    const stateManager = (sectionName) =>{
        setActive(sectionName)
    }

    return (
        <div id='resume' className={`resume-box ${scrolling ?'scrolling':''}`}>
            <Sidebar activeSection={active} />
            <div className='scroller'>
                <Education onSetActive={()=>{stateManager('Education')}} />
                {/* <Exp /> */}
                <Skills onSetActive={()=>{stateManager('Skills')}} />
            </div>
        </div>
    )
}

export default Resume
