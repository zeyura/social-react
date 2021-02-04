import React from 'react';
import {ADD_POST} from "../../../redux/profileReducer"
import MyPosts from "./MyPosts"
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}


let MyPostsContainer = connect(mapStateToProps, {ADD_POST})(MyPosts)

export default MyPostsContainer;