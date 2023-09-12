import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from "./Cart.tsx";
import {RootState} from "./App/store.ts";
import { useSelector} from "react-redux";
import {useGetProductsQuery, } from "./App/features/apiSlice.ts";
import {useEffect} from "react";
import toast from "react-hot-toast";

function App() {
    const cart = useSelector((state: RootState) => state.cart)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {data} = useGetProductsQuery({
        limit:5,
    })
    // Get the current URL search parameters
    const urlSearchParams = new URLSearchParams(window.location.search);

    // Get the value of the "search" parameter
    const searchValue = urlSearchParams.get('status');

    useEffect(() => {
        if (searchValue ==='Success') {
            toast.success('Order placed successfully.')
        }
    }, [searchValue]);

    return (
      <>
          <Cart cart={cart} products={cart.products}/>
      </>
  )
}

export default App
