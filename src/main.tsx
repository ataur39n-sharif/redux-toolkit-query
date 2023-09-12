import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./App/store.ts";
import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

<>
      <Provider store={store}>
          <Toaster
              position="top-center"
              reverseOrder={false}
          />
          <App />
      </Provider>
</>
)
