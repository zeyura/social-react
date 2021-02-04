import React from "react"
import s from './Login.module.css';
import {reduxForm, Field} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";

const LoginForm = (props) => {

    return (

        <form className={s.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <Field name='login' component='input' type="text" placeholder={'Login'}/>
            </div>
            <div>
                <Field name='password' component='input' type="password" placeholder={'Password'} />
            </div>
            <div>
                <label htmlFor="remember">
                    <Field name='remember' component='input' type="checkbox" /> remember me
                </label>
            </div>
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {

    const Submit = (data) => {
        console.log(data)

        // Thunk
    }

    return (
        <div>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={Submit} />
        </div>
    )
}


export default Login