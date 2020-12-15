import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPosts from "./MyPosts/MyPosts"
import Class from "./Profile.module.css"

function Profile() {
  return (
    <div className={Class.wrapper}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile
