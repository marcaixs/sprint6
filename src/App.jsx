import React from "react";
import { Routes, Route } from "react-router-dom";
import Checkbox from "./components/Checkbox";
import "./App.css";
import Welcome from "./components/Welcome";

const BOXES = [
  {
    title: "Seo",
    price: 300,
  },
  {
    title: "Ads",
    price: 400,
  },
  {
    title: "Web",
    price: 500,
  },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="checkbox" element={<Checkbox BOXES={BOXES} />} />
      </Routes>
    </>
  );
}

export default App;
