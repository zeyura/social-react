import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'

import {GET_USER_PROFILE, GET_STATUS, UPDATE_STATUS} from '../../redux/profileReducer'
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
       let userId = this.props.match.params.userId
       if(!userId) userId = 14032 //

        this.props.GET_USER_PROFILE(userId)
        this.props.GET_STATUS(userId)
    }

    render() {

        return (
            
            <Profile {...this.props} profile={this.props.profile} />
           
        )

    }
    
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps,{GET_USER_PROFILE, GET_STATUS, UPDATE_STATUS}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)