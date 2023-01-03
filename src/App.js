import { Route, Routes } from "react-router-dom";
import Join from "./pages/Join";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
