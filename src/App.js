import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"

const App = () => {
  return (
    <div className='App'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
            <Route path='/dialogs'
              render={ () => <DialogsContainer /> }/>

            <Route path='/profile/:userId?'
              render={ () => <ProfileContainer /> }/>

            <Route path='/users'
              render={ () => <UsersContainer /> }/>
        </div>
    </div>
) 
}

export default App;