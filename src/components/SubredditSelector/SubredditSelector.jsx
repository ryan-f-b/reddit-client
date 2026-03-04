import React from 'react';

function SubredditSelector({ setSubreddit }) {
  return (
    <>
      <button onClick={() => setSubreddit('soccer')}>r/Soccer</button>
      <button onClick={() => setSubreddit('Championship')}>r/Championship</button>
      <button onClick={() => setSubreddit('TheOther14')}>r/TheOther14</button>
    </>
  )
}

export default SubredditSelector;