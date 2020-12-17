import Class from "./ProfileInfo.module.css"
import React from "react"

function ProfileInfo(props) {
  // Methods

  let newPostTitle = React.createRef()
  let newPostText = React.createRef()

  const addPost = () => {
    let title = newPostTitle.current.value
    let text = newPostText.current.value
    console.log(title, text)
    props.addPost(text)
  }

  /////////////////////
  return (
    <div className={Class.wrapper}>
      <img
        src="https://img.tsn.ua/cached/1533908292/tsn-8c5f6b23d1211bb14030cc3abd4583f7/thumbs/1340x530/bf/74/1d750cdae19c5075e0123ec455ee74bf.jpeg"
        alt=""
        className={Class.titleImg}
      />
      <div className={Class.addPost}>
        <h3>Input New Post:</h3>
        <form>
          <div className="inputField">
            <input ref={newPostTitle} className={Class.inputText} type="text" />
          </div>
          <div className="inputField">
            <textarea
              ref={newPostText}
              className={Class.inputText}
              cols="50"
              rows="5"
            ></textarea>
          </div>
          <button type="button" onClick={addPost}>
            Add Post
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProfileInfo
