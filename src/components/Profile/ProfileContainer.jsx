import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'

import { setUserProfile } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom'
import {getUserProfile} from "../../API/api";


class ProfileContainer extends React.Component {

    componentDidMount() {

       let userId = this.props.match.params.userId
       if(!userId) userId = 2 // 

        getUserProfile(userId)
        .then(
            data => {
               this.props.setUserProfile(data);
               // this.props.toggleLoader(false)
            }
        )

    }

    render() {

        return (
            
            <Profile {...this.props} profile={this.props.profile} />
           
        )

    }
    
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let UrlDataComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {

    setUserProfile

})(UrlDataComponent)