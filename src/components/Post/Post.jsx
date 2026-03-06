import styles from './Post.module.css';
import arrow from './reddit-arrow.png'

function Post({ post }) {

  const image = post.preview?.images?.[0]?.source?.url?.replace(/&amp;/g, "&") || (post.thumbnail && post.thumbnail.startsWith("http") ? post.thumbnail : null);

  const video = post.media?.reddit_video?.fallback_url;

  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <div className={styles.votes}>
          <img src={arrow} alt='upvote arrow' /> 
          <p>{post.ups}</p>
        </div>
        <h5 className={styles.author}>Posted by u/{post.author}</h5>
      </div>
      <h3>{post.title}</h3>
      {post.selftext && (<p className={styles.postBody}>{post.selftext}</p>)}

      {video && (
        <video controls className={styles.video}>
          <source src={video} type="video/mp4" />
        </video>
      )}
      {image && (<img src={image} alt={post.title} />)}
    </div>
  )
}

export default Post;