import React from 'react'
import Header from "./Header"
import {connect} from "react-redux";
import {SET_AUTH_USER} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.SET_AUTH_USER()
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
    SET_AUTH_USER
})(HeaderContainer)
