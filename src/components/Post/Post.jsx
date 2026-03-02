import React, { useState } from 'react';

function Post({ title, votes, image }) {

  return (
    <>
        <h3>{title}</h3>
        <h5>{votes}</h5>
        <img src={image} alt={title} />
    </>
  )
}

export default Post;