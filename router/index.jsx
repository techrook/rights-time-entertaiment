import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../src/pages/Homepage"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}