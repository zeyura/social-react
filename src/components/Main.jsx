import Sidebar from "./Sidebar/Sidebar"
import Profile from "./Profile/Profile"
import Dialogs from "./Dialogs/Dialogs"

import { BrowserRouter as Router, Route } from "react-router-dom"

function Main() {
  return (
    <Router>
      <div className="main-wrap">
        <Sidebar />

        <main className="App-main-content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
        </main>
      </div>
    </Router>
  )
}

export default Main
