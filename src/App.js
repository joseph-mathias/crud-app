import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Axios from "axios";

function App() {
  return (
    <div className="App">
      <h2>CRUD APP</h2>
      <Form />
    </div>
  );
}

export default App;
