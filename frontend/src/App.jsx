import React from "react";
import Navbar from "./components/Navbar";
import { Route ,Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";



function App() {
  

  return (
    <>
      <Navbar />
      {/* Add your app components here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createpage" element={<CreatePage/>} />
        
      </Routes>

    </>
  )
}

export default App
