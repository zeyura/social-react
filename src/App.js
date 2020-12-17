import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main"

function App({ state, dispatch }) {
  return (
    <div className="App">
      <Header />
      <Main state={state} dispatch={dispatch} />
      <Footer />
    </div>
  )
}

export default App
