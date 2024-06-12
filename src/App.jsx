import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Parameters from "./pages/Parameters.jsx";
import RealTime from "./pages/RealTime.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/parameters" element={<Parameters />} />
        <Route exact path="/realtime" element={<RealTime />} />
      </Routes>
    </Router>
  );
}

export default App;