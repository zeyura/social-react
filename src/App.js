import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import LoginPage from './components/Login/Login'

const App = () => {
  return (
      <div className='App'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
              <Route path='/dialogs'
                     render={ () => <DialogsContainer /> }/>

              <Route path='/profile/:userId?'
                     render={ () => <ProfileContainer /> }/>

              <Route path='/users'
                     render={ () => <UsersContainer /> }/>

              <Route path='/login'
                     render={ () => <LoginPage /> }/>
          </div>
      </div>
  )
}

export default App;