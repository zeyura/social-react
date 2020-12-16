import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPosts from "./MyPosts/MyPosts"
import Class from "./Profile.module.css"

function Profile({ data }) {
  return (
    <div className={Class.wrapper}>
      <ProfileInfo />
      <MyPosts posts={data.posts} />
    </div>
  )
}

export default Profile
