import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'

import { GET_USER_PROFILE } from '../../redux/profileReducer'
import {Redirect, withRouter} from 'react-router-dom'


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

let authRedirectComponent = (props) => {
    if(!this.props.isAuth) {
        return <Redirect to={'/login'} />
    }
    return <ProfileContainer {...props} />
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isLogged
})

let UrlDataComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {

    GET_USER_PROFILE

})(UrlDataComponent)