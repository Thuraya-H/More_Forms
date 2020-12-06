import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form";
import Result from "./components/Result";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: ""
  })
  return (
    <div className="App">
      <Form inputs = {state} setInputs = {setState} />
      <Result data = {state} />
    </div>
  );
}

export default App;
