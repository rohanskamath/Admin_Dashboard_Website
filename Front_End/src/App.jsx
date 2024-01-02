import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SideBar from './Components/SideBar'
import Orders from './Components/Orders'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App