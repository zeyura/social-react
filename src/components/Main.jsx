import Sidebar from "./Sidebar"
import Profile from "./Profile"

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
