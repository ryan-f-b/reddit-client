import React, { useState } from 'react';
import Post from '../Post/Post.jsx';

function PostList() {
  const fakePosts = [
    {
      id: 1,
      title: "Arsenal win 3-0",
      votes: 15000,
      image: "https://via.placeholder.com/400"
    },
    {
      id: 2,
      title: "Championship playoff drama",
      votes: 10000,
      image: "https://via.placeholder.com/400"
    }
];


  return (
    <>
      {fakePosts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          votes={post.votes}
          image={post.image}
        />
      ))}
    </>
  )
}

export default PostList;