import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import NewBlog from './components/NewBlog'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <Router>
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/create' element={<NewBlog />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
