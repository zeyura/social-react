import Class from "./Post.module.css"

function Post(props) {
  return (
    <li className={Class.item}>
      <div className={Class.img}>
        <img
          src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"
          alt=""
        />
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
