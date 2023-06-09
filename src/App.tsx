import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from "./Cart.tsx";
import {RootState} from "./App/store.ts";
import { useSelector} from "react-redux";
import {useGetProductsQuery, } from "./App/features/apiSlice.ts";

function App() {
    const cart = useSelector((state: RootState) => state.cart)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {data} = useGetProductsQuery({
        limit:5,
    })
    return (
      <>
          <Cart cart={cart} products={cart.products}/>
      </>
  )
}

export default App
