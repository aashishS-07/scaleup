import React, { useEffect, useState } from 'react';

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch('/api/blog_details')
      .then(response => response.json())
      .then(data => setBlog(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {/* Render your blog data here */}
    </div>
  );
}

export default BlogDetails;