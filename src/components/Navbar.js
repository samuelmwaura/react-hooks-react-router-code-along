import react from "react";
import { NavLink } from "react-router-dom";

function Navbar(){

const linkStyles={
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
}
  return(
   <div>
    <NavLink to='/' style={linkStyles} activeStyle={{background:"red"}}>Home</NavLink>
    <NavLink to='/about' style={linkStyles} activeStyle={{background:"red"}}>About</NavLink>
    <NavLink to='/login' style={linkStyles} activeStyle={{background:"red"}}>Login</NavLink>
   </div>
  )
}

export default Navbar;