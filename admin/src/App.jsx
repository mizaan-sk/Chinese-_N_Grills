import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Add from './page/Add/Add'
import List from './page/List/List'
import ReserveTable from './page/ReservationTable/ReserveTable'
import Orders from './page/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
    const url = "http://localhost:5000"
  return (
    <div>
      <ToastContainer/>
  <Navbar/>
  <hr/>
  <div className='app-content Container'>
    <Sidebar/>
    <Routes>
      <Route path='/add' element={<Add url={url}/>}/>
      <Route path='/list' element={<List url={url}/>}/>
      <Route path='/orders' element={<Orders url={url}/>}/>
      <Route path='/reserve-table' element={<ReserveTable url={url}/>}/>
    </Routes>
  </div>
    </div>
  )
}

export default App