import { useState, useEffect } from 'react';
import styles from './PostList.module.css';
import Post from '../Post/Post.jsx';

function PostList({ subreddit }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            `https://www.reddit.com/r/${subreddit}/top.json?limit=10&t=day`
          )}`
        );

        const proxyData = await response.json();
        const data = JSON.parse(proxyData.contents);

        setPosts(data.data.children.map(post => post.data));

      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    fetchPosts();
  }, [subreddit]);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles['post-list']}>
      {posts.map(post => (
        <Post key={post.data.id} post={post.data} />
      ))}
    </div>
  )
}

export default PostList;