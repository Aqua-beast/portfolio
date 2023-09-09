import React, {useState, useEffect} from 'react'
import './About.css'

function About() {
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
    
    <div id='about' className={`about-contain ${scrolling ? 'scrolling' : ''}`}>
      <div className='intro'>
        <h1 className='head1'>About Me</h1>
        <p className='text1'>I am currently pursuing a Bachelor's degree in Computer Science Technology and I am a passionate tech enthusiast. My interests lie in the fields of Data Structures and Algorithms, as well as web development and its diverse domains</p>
        <p className='text2'>I value building meaningful connections and expanding my professional network. I am eager to collaborate with like-minded individuals, professionals, and experts in the industry.</p>
      </div>
      <div className='pic-box'>
        <img className="img" src="./profile_pic.jpg" alt="This is me!" />
      </div>
    </div>
  )
}

export default About
