import React from 'react';
import './Icons.css'

function Icons({ icons }) {
  return (
    <div className='icon-box'>
      <img className='icon-img' src={icons.url} alt={icons.alt} />
    </div>
  );
}

export default Icons;
