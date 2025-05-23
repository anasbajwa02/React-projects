import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BagSummary from '../components/BagSummary'
import BagItem from '../components/BagItem'
import { useSelector } from 'react-redux'


const Bag = () => {
 const bagItems = useSelector(state => state.bag)
 const items = useSelector(state => state.items)
 const finaleItems =items.filter((item)=>{
  const itemIndex = bagItems.indexOf(item.id);
  return itemIndex >= 0
 })


  return (
   <>
       <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finaleItems.map((item) =>    <BagItem item={item}></BagItem>)}
          
        </div>
          <BagSummary></BagSummary>
        </div>

    
    </main>

   </>
  )
}

export default Bag