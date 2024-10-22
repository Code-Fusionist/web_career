import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Routess() {
return(
    <>
    <BrowserRouter>
     <div>
     <Routes>
        <Route exact path="/" index element={<Home/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
      </Routes>
     </div>
    </BrowserRouter>
  </>
)
}
