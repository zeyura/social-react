import Sidebar from "./Sidebar/Sidebar"
import Profile from "./Profile/Profile"
import Dialogs from "./Dialogs/Dialogs"

import { BrowserRouter as Router, Route } from "react-router-dom"

function Main({ state }) {
  return (
    <Router>
      <div className="main-wrap">
        <Sidebar />

        <main className="App-main-content">
          <Route path="/profile">
            <Profile data={state.profilePage} />
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
