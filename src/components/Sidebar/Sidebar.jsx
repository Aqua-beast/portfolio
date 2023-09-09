import React from 'react'

function Sidebar({activeSection}) {
    console.log(activeSection)
    return (
        <div>
            <div className='resume-subbox'>
                <p className='resume-text'><a style={{color: (activeSection === 'Education')?'aqua':''}} href="#education">Education</a></p>
                {/* <p className='resume-text'><a href="#exp">Experience</a></p> */}
                <p className='resume-text'><a style={{ color: (activeSection === 'Skills') ? 'aqua' : '' }} href="#skills">Skills</a></p>
            </div>
        </div>
    )
}

export default Sidebar
