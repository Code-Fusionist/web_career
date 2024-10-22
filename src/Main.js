import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screen/Home";

export default function Routess() {
return(
    <>
    <BrowserRouter>
     <div>
     <Routes>
        <Route exact path="/" index element={<Home/>}></Route>
        <Route path="login" index element={<Home/>}></Route>
      </Routes>
     </div>
    </BrowserRouter>
  </>
)
}
