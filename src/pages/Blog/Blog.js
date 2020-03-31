import React, { useEffect, useState } from 'react';
import './Blog.css';

export default function Blog() {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = () => {
      // api call to grab blog from route params
    };
  });

  return <div className='Blog'></div>;
}
