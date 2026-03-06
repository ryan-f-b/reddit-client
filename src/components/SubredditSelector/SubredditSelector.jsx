import styles from './SubredditSelector.module.css';

function SubredditSelector({ setSubreddit }) {
  return (
    <div className={styles['subreddit-selector']}>
      <button onClick={() => setSubreddit('soccer')}>r/Soccer</button>
      <button onClick={() => setSubreddit('Championship')}>r/Championship</button>
      <button onClick={() => setSubreddit('TheOther14')}>r/TheOther14</button>
    </div>
  )
}

export default SubredditSelector;