import './App.css'
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
     <div className="App">

      {/* all components */}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </div>
      
    </div>
  )
}

export default App
