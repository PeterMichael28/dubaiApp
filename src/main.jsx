import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import 'tw-elements';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <Router>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
)