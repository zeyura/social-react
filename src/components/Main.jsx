import Sidebar from "./Sidebar/Sidebar"
import Profile from "./Profile/Profile"
import Dialogs from "./Dialogs/Dialogs"

import { BrowserRouter as Router, Route } from "react-router-dom"

function Main({ posts, dialogsData, messagesData }) {
  return (
    <Router>
      <div className="main-wrap">
        <Sidebar />

        <main className="App-main-content">
          <Route path="/profile">
            <Profile posts={posts} />
          </Route>
          <Route path="/dialogs">
            <Dialogs dialogsData={dialogsData} messagesData={messagesData} />
          </Route>
        </main>
      </div>
    </Router>
  )
}

export default Main
