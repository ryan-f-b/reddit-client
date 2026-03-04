function Post({ post }) {

  return (
    <>
      <p>{post.ups}</p>
      <h3>{post.title}</h3>
      <p>Posted by u/{post.author}</p>
      {post.thumbnail && post.thumbnail.startsWith("http") && (
      <img src={post.thumbnail} alt={post.title} />
      )}
    </>
  )
}

export default Post;