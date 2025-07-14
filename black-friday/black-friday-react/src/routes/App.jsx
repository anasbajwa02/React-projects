import Home from "./Home"
import About from "./About"
import { Outlet } from "react-router-dom"
import "../App.css"
import Nav from "../components/nav/Nav"
function App() {

  return (
    <>
    <Nav></Nav>
    <Outlet></Outlet>
      {/* <Home></Home>
      <About></About> */}
    </>
  )
}

export default App
