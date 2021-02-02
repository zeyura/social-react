import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'

import { GET_USER_PROFILE } from '../../redux/profileReducer'
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
       let userId = this.props.match.params.userId
       if(!userId) userId = 2 // 

        this.props.GET_USER_PROFILE(userId)
    }

    render() {

        return (
            
            <Profile {...this.props} profile={this.props.profile} />
           
        )

    }
    
}


let authRedirectComponent = withAuthRedirect(ProfileContainer) // HOC  withAuthRedirect


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let UrlDataComponent = withRouter(authRedirectComponent)


export default connect(mapStateToProps, {

    GET_USER_PROFILE

})(UrlDataComponent)