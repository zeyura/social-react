import Post from "./Post/Post"
import Class from "./MyPosts.module.css"

function MyPosts() {
  const posts = [
    { text: "Hello!!", likesCount: "35" },
    { text: "Sam Hullo!!", likesCount: "45" },
    { text: "Poxxxues", likesCount: "345" },
    { text: "Pokedova!", likesCount: "5" },
  ]

  let postElems = posts.map((p, i) => (
    <Post text={p.text} likesCount={p.likesCount} key={i} />
  ))

  return <ul className={Class.posts}>{postElems}</ul>
}

export default MyPosts
