import "./App.css";
import Hero from "./Components/Hero/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Squad from "./Components/Squad/Squad";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} exact />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/squad" element={<Squad />} />

      </Routes>
    </Router>
  );
}

export default App;
