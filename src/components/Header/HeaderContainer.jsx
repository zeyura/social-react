import React from 'react'
import Header from "./Header"
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {getAuthMe} from "../../API/api"

class HeaderContainer extends React.Component {

    componentDidMount() {

        getAuthMe()
            .then(
                data => {
                    if(data.resultCode === 0) {
                        this.props.setAuthUserData(data.id, data.email, data.login)
                    }
                }
            )
    }

    render() {
        return (
            <Header {...this.props}>

            </Header>
        )
    }

}


let mapStateToProps = (state) => ({
    logged: state.auth.isLogged,
    login:  state.auth.login,
})

export default connect(mapStateToProps, {

    setAuthUserData

})(HeaderContainer)
