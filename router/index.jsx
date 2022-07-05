import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "../views";
import SignIn from "../views/sign-in";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}