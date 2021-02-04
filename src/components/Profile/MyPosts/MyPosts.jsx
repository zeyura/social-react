import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {reduxForm, Field} from "redux-form"
import handleSubmit from "redux-form/lib/handleSubmit"

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText'
                       component='textarea'
                       placeholder='Enter Post -->'>
                </Field>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'newPost'
})(PostForm)

const MyPosts = (props) => {
    let postsElements = props.posts
        .map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)


    let onAddPost = (data) => {
        console.log(data.newPostText)

        props.ADD_POST(data.newPostText);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>

                <PostReduxForm onSubmit={onAddPost} />

            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts