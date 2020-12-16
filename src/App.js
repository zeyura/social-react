import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main"

function App({ posts, dialogsData, messagesData }) {
  return (
    <div className="App">
      <Header />
      <Main
        posts={posts}
        dialogsData={dialogsData}
        messagesData={messagesData}
      />
      <Footer />
    </div>
  )
}

export default App
