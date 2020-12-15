import Sidebar from "./Sidebar/Sidebar"
import Profile from "./Profile/Profile"
import Dialogs from "./Dialogs/Dialogs"

function Main() {
  return (
    <div className="main-wrap">
      <Sidebar />

      <main className="App-main-content">
        {/* <Profile /> */}
        <Dialogs />
      </main>
    </div>
  )
}

export default Main
