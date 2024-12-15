import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Alternative from "./Alternative";
import TopTracks from "./TopTracks";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/fictional-disco" element={<Alternative />} />
  <Route path="/fictional-disco/top-tracks" element={<TopTracks />} />
      </Routes>
    </Router>  
  );

    

    

    
  };

  export default App;