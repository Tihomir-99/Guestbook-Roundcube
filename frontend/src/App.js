import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import MessagePage from './pages/MessagePage'


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/leave-message" element={<MessagePage/>} />
      </Routes>
    </Router>
  )
}

export default App;