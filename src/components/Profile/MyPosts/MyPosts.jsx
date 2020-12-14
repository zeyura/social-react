import Post from "./Post/Post"
import Class from "./MyPosts.module.css"

function MyPosts() {
  return (
    <div className={Class.wrapper}>
      <h3>MyPosts component</h3>
      <ul className={Class.posts}>
        <Post />
      </ul>
    </div>
  )
}

export default MyPosts
