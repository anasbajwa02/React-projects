
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Tabbar from './components/TabBar/Tabbar'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import NavList from './components/NavList/NavList'
import Home from './components/Home/Home'
import About from './components/About/About'
import Theme from './components/Theme/Theme'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
function App() {
  
  return (
    <>
    <div className="main">
     <Header></Header>
     <div className="middle-section">
      <div className="sub-mds-1">
     <Tabbar></Tabbar>
     <Navbar></Navbar>
     </div>
     <div className="sub-mds-2">
      <div className="sub-mds-2-1">
     <NavList></NavList>

      </div>
     <div className="sub-mds-2-2">
     <Outlet></Outlet>

     </div>
     
     </div>
     </div>
     <Footer></Footer>
     </div>
    </>
  )
}

export default App
