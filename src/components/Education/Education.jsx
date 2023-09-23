import React from 'react'
import './Education.css'

function Education() {

  return (
    <div id='education' className="education-container">
      <h2 className='education-head'>Education</h2>
      <div className="education-item">
        <img
          src="./logos/ipu.png"
          alt="Guru Gobind Singh Indraprastha University Logo"
          className='img-logo'
        />
        <div>
          <h3 className='education-subhead'>Guru Gobind Singh Indraprastha University</h3>
          <p className='education-text'>Bachelor of Technology - BTech, Computer Science</p>
          <p className='education-text'>Dec 2021 - May 2025</p>
        </div>
      </div>
      <div className="education-item">
        <img
          src="logos/adgitm.webp"
          alt="Dr Akhilesh Das Gupta Institute of Technology & Management Logo"
          className='img-logo'
        />
        <div>
        <h3 className='education-subhead'>Dr Akhilesh Das Gupta Institute of Technology & Management</h3>
        <p className='education-text'>Bachelor of Technology - BTech, Computer Science</p>
        <p className='education-text'>2021 - 2025</p>
        </div>
      </div>
      <div className="education-item">
        <img
          src="logos/bps.jpeg"
          alt="Bharti Public School - India Logo"
          className='img-logo'
        />
        <div>
        <h3 className='education-subhead'>Bharti Public School - India</h3>
        <p className='education-text'>From nursery to Xll</p>
        <p className='education-text'>2009 - 2021</p>
        </div>
      </div>
    </div>
  )
}

export default Education
