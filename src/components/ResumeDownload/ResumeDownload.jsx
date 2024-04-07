import React from 'react'
import './ResumeDownload.css';
import { FaDownload } from "react-icons/fa";

const ResumeDownload = () => {

  return (
    <a className='resume-download' download href='./resume.pdf'>
      <FaDownload />
    </a>
  )
}

export default ResumeDownload
