import config from '../config';

const BlogHelper = {
  // api call that returns all of the blogs
  getBlogs() {
    return fetch(`${config.API_ENDPOINT}/blogs`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default BlogHelper;
