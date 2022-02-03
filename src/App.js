import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from "./pages/payment";
import Success from "./pages/success";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Payment />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
  );
}

export default App;
