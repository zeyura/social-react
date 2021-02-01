import React from 'react'
import Header from "./Header"
import axios from "axios"
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true // точно отправить куки, кросдоменний запрос..
        })
            .then(
                response => {

                    let {id, login, email} = response.data.data

                    if(response.data.resultCode === 0) {
                        this.props.setAuthUserData(id, email, login)
                    } else {

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
