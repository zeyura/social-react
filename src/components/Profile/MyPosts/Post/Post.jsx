import Class from "./Post.module.css"

function Post() {
  return (
    <li className={Class.item}>
      <div className={Class.img}>
        <img
          src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"
          alt=""
        />
      </div>
      <div className={Class.content}>
        <h3>Post description</h3>
        <div className={Class.text}>
          <p>
            ipsum dolor textes polop.. ipsum dolor textes polop-- ipsum dolor
            ... ipsum dolor textes polop.. ipsum dolor textes polop-- ipsum
            dolor ... 123456 ipsum dolor textes polop.. ipsum dolor textes
            polop-- ipsum dolor ... ipsum dolor textes polop.. ipsum dolor
            textes polop-- ipsum dolor ... 123456
          </p>

          <p>
            ipsum dolor textes polop.. ipsum dolor textes polop-- ipsum dolor
            ... ipsum dolor textes polop.. ipsum dolor textes polop-- ipsum
            dolor ... 123456
          </p>

          <p>
            ipsum dolor textes polop.. ipsum dolor textes polop-- ipsum dolor
            ... ipsum dolor textes polop.. ipsum dolor textes polop-- ipsum
            dolor ... 123456
          </p>
        </div>
      </div>
    </li>
  )
}

export default Post
