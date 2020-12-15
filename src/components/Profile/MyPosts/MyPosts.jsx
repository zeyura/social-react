import Post from "./Post/Post"
import Class from "./MyPosts.module.css"

function MyPosts() {
  return (
    <div className={Class.wrapper}>
      <h3>MyPosts component</h3>
      <ul className={Class.posts}>
        <Post text="Hello!!" likesCount="45" />
        <Post text="Sam Hullo!!" likesCount="4" />
        <Post text="Pokedova!" likesCount="125" />
      </ul>
    </div>
  )
}

export default MyPosts
