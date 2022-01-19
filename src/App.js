import React from "react";
import "./App.css";

// connect to two pages
import Home from "./Pages/Home";
import NasaAPI from "./Pages/NasaPhoto";

// using routes for navigation
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={NasaAPI} path="/nasaphoto" />
      </div>
    </BrowserRouter>
  );
}
