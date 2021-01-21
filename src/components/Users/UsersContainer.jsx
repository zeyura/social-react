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

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },

    setCurrentPage: (currentPage) => {
      dispatch(currentPageAC(currentPage))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(totalUsersCountAC(totalCount))
    },

    toggleLoader: (loading) => {
      dispatch(loaderAC(loading))
    }

  }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer