import React from 'react'
import './Education.css'

function Education() {

  return (
    <div id='education' className="education-container">
      <h2>Education</h2>
      <div className="education-item">
        <img
          src="./logos/ipu.png"
          alt="Guru Gobind Singh Indraprastha University Logo"
          className='img-logo'
        />
        <div>
          <h3>Guru Gobind Singh Indraprastha University</h3>
          <p>Bachelor of Technology - BTech, Computer Science</p>
          <p>Dec 2021 - May 2025</p>
        </div>
      </div>
      <div className="education-item">
        <img
          src="logos/adgitm.webp"
          alt="Dr Akhilesh Das Gupta Institute of Technology & Management Logo"
          className='img-logo'
        />
        <div>
        <h3>Dr Akhilesh Das Gupta Institute of Technology & Management</h3>
        <p>Bachelor of Technology - BTech, Computer Science</p>
        <p>2021 - 2025</p>
        </div>
      </div>
      <div className="education-item">
        <img
          src="logos/bps.jpeg"
          alt="Bharti Public School - India Logo"
          className='img-logo'
        />
        <div>
        <h3>Bharti Public School - India</h3>
        <p>From nursery to Xll</p>
        <p>2009 - 2021</p>
        </div>
      </div>
    </div>
  )
}

export default Education
