import React, { useState } from 'react';
import SubredditSelector from './components/SubredditSelector/SubredditSelector.jsx';
import PostList from './components/PostList/PostList.jsx';

function App() {

  return (
    <>
      <h1>FootballReddit</h1>
      <SubredditSelector />
      <PostList />
    </>
  )
}

export default App;
