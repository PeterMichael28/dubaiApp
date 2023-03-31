import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import 'tw-elements';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";
import toast, { Toaster } from 'react-hot-toast';
import { RecoilRoot } from 'recoil';


const queryClient = new QueryClient( {
  queryCache: new QueryCache( {
    onError: ( error, query ) => {
      if ( query.state.data !== undefined ) {
        toast.error(`Something went wrong: ${error.message}`)
      }
    }
  })
})

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <RecoilRoot>
        <App />
        <Toaster />
      </RecoilRoot>
    </Router>
    <ReactQueryDevtools initialIsOpen={false } position='bottom-right'/>
  </QueryClientProvider>
)