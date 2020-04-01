import React, { useEffect, useState } from 'react';
import './Blog.css';
import BlogCalls from '../../Helpers/BlogCalls';

export default function Blog(props) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = () => {
      BlogCalls.getBlog(props.match.params.blog_id);
      // api call to grab blog from route params
    };
  });

  return <div className='Blog'></div>;
}
