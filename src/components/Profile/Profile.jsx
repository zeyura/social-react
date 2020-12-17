import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPosts from "./MyPosts/MyPosts"
import Class from "./Profile.module.css"

function Profile({ data, addPost }) {
  return (
    <div className={Class.wrapper}>
      <ProfileInfo addPost={addPost} />
      <MyPosts posts={data.posts} />
    </div>
  )
}

export default Profile
