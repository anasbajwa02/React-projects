import React from 'react'
import HomeItem from "../components/HomeItem"
import { useSelector } from 'react-redux';


const Home = () => {
  
  const items = useSelector((store) => store.items )
  
    
  return (
   <>
 <main>
        <div className="items-container">
          {items.map((item)=>{
            return  <HomeItem key={item.id} item={item}></HomeItem>
          })}
        </div>
    </main>
   </>
  )
}

export default Home