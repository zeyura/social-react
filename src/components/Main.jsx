import Sidebar from "./Sidebar/Sidebar"
import Profile from "./Profile/Profile"

function Main() {
  return (
    <div className="main-wrap">
      <Sidebar />

      <main className="App-main-content">
        <Profile />
      </main>
    </div>
  )
}

export default Main
