import MyPosts from "./MyPosts/MyPosts"
import Class from "./Profile.module.css"

function Profile() {
  return (
    <div className={Class.wrapper}>
      <h1>Profile</h1>

      <MyPosts />
    </div>
  )
}

export default Profile
