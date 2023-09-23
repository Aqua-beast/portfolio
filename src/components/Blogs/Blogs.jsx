import React from 'react'
import './Blogs.css'
import { blogs } from '../../data';

function Blogs() {
  return (
    <div className='blog'>
    <h1 className='blog-head'>Blogs</h1>
      <div id='Blogs' className='blog-container'>
        {blogs.map((blog) => (
          <div className='blog-item' key={blog.id}>
            <img className='blog-item-photo' src={blog.photo} alt={blog.alt} />
            <span className='blog-item-head'>{blog.topic}</span>
            <span className='blog-item-desc'>{blog.description}</span>
            <a className='blog-item-button' href={blog.url}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs
