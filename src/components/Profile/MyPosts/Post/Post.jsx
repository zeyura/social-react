import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='/img/155.jpg' />
        { props.message }
      <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;