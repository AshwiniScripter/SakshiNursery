import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; // adjust the path based on your file structure


const App = () => {
  return (
    <Router>
      <div className='m-0 p-0'>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1 className="p-10"><Home /></h1>} />
          <Route path="/about" element={<AboutUs />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  )
}

export default App