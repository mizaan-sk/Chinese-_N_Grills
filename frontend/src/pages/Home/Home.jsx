import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import { useState } from 'react'
import EmailSender from '../email_send'
const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <EmailSender/>
    </div>
  )
}

export default Home
