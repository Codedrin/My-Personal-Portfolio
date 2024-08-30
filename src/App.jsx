import React from 'react';
import Mousepointer from './components/Mousepointer.jsx';
import Navbar from './components/Navbar.jsx';
import './index.css'

function App() {

  return (
    <div className="App">
    <Navbar />
    <Mousepointer />
    {/* Other content */}
  </div>
  )
}

export default App
