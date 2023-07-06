import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from "./Cart.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {RootState} from "./App/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {loadCartProduct} from "./App/features/cartSlice.ts";

function App() {
    const cart = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()
    const [products,setProducts] = useState([])
    console.log(cart)
        useEffect(()=>{
            axios.get(`https://anxious-erin-shrug.cyclic.app/api/products?limit=4&page=${Math.round(Math.random()*10)}`)
                .then(response => {
                    const modifiedData: any = [];
                    response.data.products?.map((product: any, index: number) => {
                        modifiedData.push({...product, quantity: 1, position: index})
                    })
                    dispatch(loadCartProduct(modifiedData))
                    setProducts(response.data.products)
                })
                .catch(err => console.log(err))
        },[])

  return (
      <>
          <Cart products={products}/>
      </>
  )
}

export default App
