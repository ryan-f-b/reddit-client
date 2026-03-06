import { useState } from 'react';
import SubredditSelector from './components/SubredditSelector/SubredditSelector.jsx';
import PostList from './components/PostList/PostList.jsx';

function App() {
  const [subreddit, setSubreddit] = useState('soccer');

  return (
    <>
      <h1>Football<span>Reddit</span></h1>
      <SubredditSelector subreddit={subreddit} setSubreddit={setSubreddit}/>
      <PostList subreddit={subreddit}/>
    </>
  )
}

export default App;
