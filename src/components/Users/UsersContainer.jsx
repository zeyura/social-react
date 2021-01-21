import React from 'react'
import {followAC, unfollowAC, setUsersAC, currentPageAC, totalUsersCountAC, loaderAC} from "../../redux/usersReducer"
import Users from "./Users"
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    siblingsCount: state.usersPage.siblingsCount,
    isLoading: state.usersPage.isLoading
  }
}


let UsersContainer = connect(mapStateToProps, {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: currentPageAC,
  setTotalUsersCount: totalUsersCountAC,
  toggleLoader: loaderAC
})(Users)

export default UsersContainer