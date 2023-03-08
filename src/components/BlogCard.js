import React from 'react'
import { Link } from 'react-router-dom';

export const BlogCard = () => {
  return (
  
    <div className='blog-card'>
     <div className='card-images'> 
        <img src='images/blog-1.jpg' className='img-fluid w-100  ' alt='blog' />
     </div>
     <div className='blog-content'>
        <p className='date'>28 Feb, 2023</p>
        <h5 className='title'>A beautiful sunday morning renaissance </h5>
        <p className='desc'>
            Lorem ipsum dolor sit amet consecteture adipisicing elit. Atque
            quaerat accusam officia
        </p>
        <Link to="/blog/id" className='button'>
            Read More
        </Link>
     </div>
    </div>

  )
}
export default BlogCard;