import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginAuth from "./Pages/LoginAuth";
import SuccessAut from "./Pages/SuccessAut";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginAuth />} />
        <Route path="/success" element={<SuccessAut />} />
      </Routes>
    </Router>
  );
}

export default App;
