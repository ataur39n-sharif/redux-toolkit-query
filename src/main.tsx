import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./App/store.ts";
// import {Analytics} from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>

      {/*<Analytics />*/}
  </React.StrictMode>,
)
