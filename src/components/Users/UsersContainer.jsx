import React from 'react'
import {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleLoader, toggleFollowProgress,
    getUsersThunkCreator
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
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleLoader,
    toggleFollowProgress,
    getUsersThunkCreator

})(Users)

export default UsersContainer