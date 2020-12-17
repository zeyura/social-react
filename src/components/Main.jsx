import Sidebar from "./Sidebar/Sidebar"
import Profile from "./Profile/Profile"
import Dialogs from "./Dialogs/Dialogs"

import { BrowserRouter as Router, Route } from "react-router-dom"

function Main({ state, addPost }) {
  return (
    <Router>
      <div className="main-wrap">
        <Sidebar data={state.sidebar} />

        <main className="App-main-content">
          <Route path="/profile">
            <Profile data={state.profilePage} addPost={addPost} />
          </Route>
          <Route path="/dialogs">
            <Dialogs data={state.messagesPage} />
          </Route>
        </main>
      </div>
    </Router>
  )
}

export default Main
