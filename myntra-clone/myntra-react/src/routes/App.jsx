
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router"
import { FetchItems } from "../components/FetchItems"
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
   const fetchstatus =  useSelector((store) => store.fetchStatus);
  

  
  return (
    <>
    <Header></Header>
    <FetchItems></FetchItems>
    {fetchstatus.currentlyFetching ? <LoadingSpinner></LoadingSpinner>: <Outlet></Outlet>}
   
    <Footer></Footer>
    </>
  )
}

export default App