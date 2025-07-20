import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavSectionOne from "./components/NavSectionOne"
import HomePage from "./components/HomePage"

function App() {

  return (
    <Router>
      <NavSectionOne/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/companies" element={<HomePage/>}/>
        <Route path="/interns" element={<HomePage/>}/>
        <Route path="/post-a-job" element={<HomePage/>}/>
        <Route path="/how-it-works" element={<HomePage/>}/>
        <Route path="/blogs" element={<HomePage/>}/>
        <Route path="/faq" element={<HomePage/>}/>
        <Route path="/contact-us" element={<HomePage/>}/>
        <Route path="/get-started" element={<HomePage/>}/>
        <Route path="/hire-an-intern" element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}

export default App
