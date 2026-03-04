import { useState, useEffect } from 'react';
import Post from '../Post/Post.jsx';

function PostList({ subreddit }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    // Fetching the subreddit data with a call using string interpolation
    fetch(`/reddit/r/${subreddit}/top.json?limit=10&t=day`)

      // Awaiting response from the subreddit
      .then(response => {
        if (!response.ok) {

          // Throwing an error if the response is not OK
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Return the response as a json object if the response is OK
        return response.json();
      })

      // Updating relevant state using the json object
      .then(data => {
        setPosts(data.data.children);
        setLoading(false);
      })

      // Catching and logging any errors to the console
      .catch(err => {
        console.error(err);
        setError("Failed to load posts.");
        setLoading(false);
      });

      // Ensureing a new fetch request is made each time the subreddit changes
  }, [subreddit]);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {posts.map(post => (
        <Post key={post.data.id} post={post.data} />
      ))}
    </>
  )
}

export default PostList;