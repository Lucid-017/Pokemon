// import react and reactdom libraies
import React from 'react'
import ReactDom, { createRoot } from 'react-dom/client'
import App from './App'

//  get a refernce to the ID root from our html
const el = document.getElementById('root')

// tell react to take control of the element
const root = ReactDom.createRoot(el)

// show component on screen
root.render(<App/>)