import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPosts from "./MyPosts/MyPosts"
import Class from "./Profile.module.css"

function Profile({ posts }) {
  return (
    <div className={Class.wrapper}>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  )
}

export default Profile
