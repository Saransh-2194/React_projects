import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//the createRoot function creates aq  virtual DOM and then compares the main DOM and then update 
//only the changes that are different in both the DOMs 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
