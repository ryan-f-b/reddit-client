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
        const url = `https://www.reddit.com/r/${subreddit}/top.json?limit=10&t=day`;

        const response = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const proxyData = await response.json();
        const redditData = JSON.parse(proxyData.contents);

        const posts = redditData.data.children.map(child => child.data);

        setPosts(posts);
        setLoading(false);

      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
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