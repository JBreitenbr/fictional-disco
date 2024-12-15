import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Alternative from "./Alternative";
import Callback from "./Callback";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/fictional-disco" element={<Alternative />} />
  
      </Routes>
    </Router>  
  );

    

    

    
  };

  export default App;