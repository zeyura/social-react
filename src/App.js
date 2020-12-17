import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main"

function App({ state, addPost }) {
  return (
    <div className="App">
      <Header />
      <Main state={state} addPost={addPost} />
      <Footer />
    </div>
  )
}

export default App
