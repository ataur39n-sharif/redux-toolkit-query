import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from "./Cart.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [products,setProducts] = useState([])
    console.log(products)
        useEffect(()=>{
            axios.get(`https://anxious-erin-shrug.cyclic.app/api/products?limit=4&page=${Math.round(Math.random()*10)}`)
                .then(response => setProducts(response.data.products))
                .catch(err => console.log(err))
        },[])

  return (
      <>
          <Cart products={products}/>
      </>
  )
}

export default App
