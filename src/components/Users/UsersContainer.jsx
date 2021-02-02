import React from 'react'
import {
    follow, unfollow, setCurrentPage,
    GET_USERS, FOLLOW_USER, UN_FOLLOW_USER
} from "../../redux/usersReducer"
import Users from "./Users"
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
  return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      siblingsCount: state.usersPage.siblingsCount,
      isLoading: state.usersPage.isLoading,
      followingInProgress: state.usersPage.followingInProgress
  }
}

let UsersContainer = connect(mapStateToProps, {
    setCurrentPage,
    GET_USERS,
    FOLLOW_USER,
    UN_FOLLOW_USER
})(Users)

export default UsersContainer