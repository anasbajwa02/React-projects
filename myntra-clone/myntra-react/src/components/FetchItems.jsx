import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemsActions } from '../store/itemsSlice';
import { fetchStatusActions } from '../store/fetchStatusSlics';

export const FetchItems = () => {
   const fetchstatus =  useSelector((store) => store.fetchStatus);

 const dispatch =   useDispatch();
//  console.log(fetchstatus)

useEffect(() => {
  if (fetchstatus.fetchDone) return;

  const controller = new AbortController();
  const signal = controller.signal;
dispatch(fetchStatusActions.markFetchingStarted());
  fetch("http://localhost:8080/items", { signal })
    .then((res) => res.json())
    .then(({ items }) => {
dispatch(fetchStatusActions.markFetchDone());

dispatch(fetchStatusActions.markFetchingFinished());

      dispatch(itemsActions.addInitialItems(items[0]));
      console.log("items fetched", items);
    })
  

  return () => {
    controller.abort(); // safely abort fetch on cleanup
  };
}, [fetchstatus]);
//  console.log(fetchstatus)


  return (
    <div>
       
    </div>

  )
}
