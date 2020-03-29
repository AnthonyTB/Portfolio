import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';
import BlogHelper from '../../../Helpers/BlogCalls';

export default function Blogs() {
  const [blogs, setBlogs] = useState(null);

  // on render grabs the most current list of blogs from database
  useEffect(() => {
    const fetchBlogs = async () => {
      if (!blogs) {
        const response = await BlogHelper.getBlogs();
        setBlogs(response);
      }
    };
    fetchBlogs();
  }, []);

  // Shortens title if to long
  function truncateTitle(text) {
    const words = text.split('');
    if (words.length > 40) {
      return words.slice(0, 40).join('') + ' ...';
    }
    return text;
  }

  // renders the list of blogs
  const blogsList = () => {
    return (
      <ul>
        {blogs.map(blog => (
          <Link to={`${blog.title.replace(/[\n# $&:\n\t]/g, '-')}`}>
            <li
              key={blog.id}
              className='ThingListItem__image'
              style={{
                backgroundImage: `url(${blog.mainimg})`
              }}
            >
              <div className='details'>
                <h3>{truncateTitle(blog.title)}</h3>
                <span>
                  {new Date(blog.date).toLocaleString().split(',')[0]}
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    );
  };

  return (
    <div className='Blogs'>
      <br />
      <hr />
      <section className='body2'>
        <h5>Blogs</h5>
        {blogs ? blogsList() : <h4>Loading...</h4>}
      </section>
      <hr />
      <br />
    </div>
  );
}
