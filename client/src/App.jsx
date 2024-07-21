import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="bg-slate-900 flex flex-col">
        <Routes>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />}/>
        {/* <Route element={}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
