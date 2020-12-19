import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPosts from "./MyPosts/MyPosts"
import Class from "./Profile.module.css"

function Profile({ data, dispatch }) {
  
  return (
    <div className={Class.wrapper}>
      <ProfileInfo dispatch={dispatch} />
      <MyPosts posts={data.posts} />
    </div>
  )
}

export default Profile
