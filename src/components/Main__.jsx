import Sidebar from "./Navbar/Navbar"
import Profile from "./Profile/Profile"
import DialogsContainer from "./Dialogs/DialogsContainer"

import { BrowserRouter as Router, Route } from "react-router-dom"

function Main({ state, dispatch }) {
  return (
    <Router>
      <div className="main-wrap">
        <Sidebar data={state.sidebar} />

        <main className="App-main-content">
          <Route path="/profile">
            <Profile data={state.profilePage} dispatch={dispatch} />
          </Route>
          <Route path="/dialogs">
            <DialogsContainer data={state.messagesPage} dispatch={dispatch} />
          </Route>
        </main>
      </div>
    </Router>
  )
}

export default Main
