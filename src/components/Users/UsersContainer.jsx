import React from 'react'
import {
    setCurrentPage,
    GET_USERS, FOLLOW_USER, UN_FOLLOW_USER
} from "../../redux/usersReducer"
import Users from "./Users"
import { connect } from 'react-redux'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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

export default compose (
    withAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage,
        GET_USERS,
        FOLLOW_USER,
        UN_FOLLOW_USER
    })
)(Users)