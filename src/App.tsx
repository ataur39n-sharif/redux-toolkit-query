import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from "./Cart.tsx";
import {useEffect} from "react";
import {RootState} from "./App/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";

function App() {
    const cart = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>()

        useEffect(()=>{
            // dispatch(getProducts(5))
        },[])


  return (
      <>
          <Cart cart={cart} products={cart.products|| []}/>
      </>
  )
}

export default App
