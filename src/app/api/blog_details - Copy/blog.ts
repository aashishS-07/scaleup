import { NextApiRequest, NextApiResponse } from 'next';
import data from './blog_details.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Extract the id from the request parameters
  const { id } = req.query;

  // Convert id to a number and find the corresponding blog post
  const blogPost = data.find((post) => post.id === parseInt(id as string, 10));

  // If the blog post is found, return it
  if (blogPost) {
    res.status(200).json(blogPost);
  } else {
    // If not found, return a 404 error
    res.status(404).json({ message: `Blog post with id ${id} not found` });
  }
}
