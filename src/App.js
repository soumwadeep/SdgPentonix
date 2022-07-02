import './App.css';
import Home from "./Home";
import About from "./About";
import { Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
export default App;