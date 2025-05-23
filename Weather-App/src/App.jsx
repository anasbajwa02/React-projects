
import './App.css'
import Sidebar from './component/sidebar/Sidebar'
import Main from './component/main/Main'
import { WeatherProvider } from './Context/Context_Api'
function App() {



  return (
    <WeatherProvider>
    <div classNameName="container">
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
    </WeatherProvider>
   
  )
}

export default App
