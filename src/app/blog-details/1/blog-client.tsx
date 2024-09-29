import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Make sure to use this for app directory


// This is necessary if you're using dynamic routes
export async function generateStaticParams() {
  // Return an array of params for your dynamic route
  return [
    { id: '1' },
    { id: '2' },
    // Add other IDs you want to pre-render
  ];
}

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(`/api/blog_details/${params.id}`) // Fetch using the route parameter
      .then(response => response.json())
      .then(data => setBlog(data))
      .catch(error => console.error('Error:', error));
  }, [params.id]); // Add params.id as a dependency


  return (
    <div>
      {/* Render your blog data here */}
    </div>
  );
}

export default BlogDetails;