import Class from "./Post.module.css"

function Post(props) {
  return (
    <li className={Class.item}>
      <div className={Class.img}>
        <img src="../img/155.jpg" alt="avatar" />
      </div>
      <div className={Class.content}>
        <h3 className={Class.label}>Post description</h3>
        <div className={Class.text}>
          <p>{props.text}</p>
          <p>Likes: {props.likesCount}</p>
        </div>
      </div>
    </li>
  )
}

export default Post
