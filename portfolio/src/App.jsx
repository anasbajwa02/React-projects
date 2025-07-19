import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Tabbar from './components/TabBar/Tabbar';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import NavList from './components/NavList/NavList';
import { useContext } from 'react';
import ThemeContext from './context/themeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`main ${theme ? "vscode-theme" : "night-owl-theme"}`}>
      <Header />
      <div className="middle-section">
        <div className="sub-mds-1">
          <Tabbar />
          <Navbar />
        </div>
        <div className="sub-mds-2">
          <div className="sub-mds-2-1">
            <NavList />
          </div>
          <div className="sub-mds-2-2">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
