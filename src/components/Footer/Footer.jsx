import React from 'react'
import {BsInstagram, BsFacebook, BsLinkedin, BsGithub} from 'react-icons/bs';
import {AiOutlineArrowUp} from 'react-icons/ai';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>Copyright All Rights Reserved&copy; {new Date().getFullYear()}</p>
          <ul className="footer-links">
            <li><a href="https://www.instagram.com/aryan_sadh_007/"><BsInstagram size={20} /></a></li>
            <li><a href="https://www.facebook.com/aryan.sadh.31"><BsFacebook size={20} /></a></li>
            <li><a href="https://github.com/Aqua-beast"><BsGithub size={20} /></a></li>
            <li><a href="https://www.linkedin.com/in/aryan-sadh-1265a022a/"><BsLinkedin size={20} /></a></li>
          </ul>
          <a href="#home"><AiOutlineArrowUp className='arrow-down' style={{color: 'white'}} size={25} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

