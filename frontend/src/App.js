import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MainContext from './context/context';
import ROUTES from './routes/routes';
import { useState } from 'react';

function App() {
  const router = createBrowserRouter(ROUTES)
  const [data,setData] = useState([])
  const [basket,setBasket] = useState()
  const [basketItems,setBasketitems] = useState(localStorage.getItem("basketItems")?JSON.parse(localStorage.getItem("basketItems")):[])

  return (
    <MainContext.Provider value={(data,setData,basket,setBasket)}>
      <RouterProvider router={router}/> 
    </MainContext.Provider>
  );
}

export default App;
