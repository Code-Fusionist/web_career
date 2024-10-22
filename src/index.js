import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/Home"
import Pred from "./screen/Prediction";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/pred" element={<Prediction/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
