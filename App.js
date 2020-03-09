import React from 'react';
import './App.css';
import axios from 'axios'

function App() {
  function login(e)
  {
    e.preventDefault();
    console.log("I am clicked");
    let request = {
      email: document.getElementById('MyInputEmail1').value,
      password: document.getElementById('MyInputPassword1').value

    }
    console.log("The value is",request);
  axios.post("http://localhost:5000/login", request)
    .then(resp => {
      alert(resp.data.message)
    })
    .catch(err => {
      console.log(err);

    })
  }
return (
  <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="InputEmail1">Email address</label>
        <input type="email" className="form-control" id="MyInputEmail1" />

      </div>
      <div className="form-group">
        <label htmlFor="InputPassword1">Password</label>
        <input type="password" className="form-control" id="MyInputPassword1" />
      </div>

      <button type="submit" className="btn btn-primary" onClick={(e)=>login(e)}>Submit</button>
    </form>
  </div>
);
}

export default App;
