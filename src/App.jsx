import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Super from "./Super";
import Redirect from "./Redirect";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/fictional-disco" element={<Super />} />
        <Route path="/fictional-disco/redirect" element={<Redirect />} />
      </Routes>
    </Router>  
  );

    

    

    
  };

  export default App;