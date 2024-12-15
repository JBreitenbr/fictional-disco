import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AllInOne from "./AllInOne";
import Redirect from "./Redirect";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/fictional-disco" element={<AllInOne />} />
        <Route path="/fictional-disco/redirect" element={<Redirect />} />
      </Routes>
    </Router>  
  );

    

    

    
  };

  export default App;