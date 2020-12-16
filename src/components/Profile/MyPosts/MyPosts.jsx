import Post from "./Post/Post"
import Class from "./MyPosts.module.css"

function MyPosts({ posts }) {
  let postElems = posts.map((p, i) => (
    <Post text={p.text} likesCount={p.likesCount} key={i} />
  ))

  return <ul className={Class.posts}>{postElems}</ul>
}

export default MyPosts
