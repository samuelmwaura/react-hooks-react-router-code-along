import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './pages/App'


ReactDOM.render(  
  <BrowserRouter> {/*Now the browser router controls what is being in the application */}
  <App />
  </BrowserRouter>
, document.getElementById("root"));
