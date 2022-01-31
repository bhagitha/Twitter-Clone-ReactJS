import './Header.css'
import { Link } from "react-router-dom";
export default
function Header()
{
  return(
    <nav class="navbar navbar-expand-sm navbar-dark fixed-top "style={{backgroundColor:"#1DA1F2"}}>
    <a class="navbar-brand" href="#"> <b id="">Twitter</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
       <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar"style={{justifyContent:"center"}}>
    <ul class=" nav navbar-nav">
    <li class="nav-item" ><Link to="/" id="list">Home</Link></li>
    <li class="nav-item"><Link to="/Profile"id="list">Profile</Link></li>
    <li class="nav-item"><Link to="/Login"id="list">Login</Link></li>
    <li class="nav-item"><Link to="/Register"id="list">Register</Link></li>
  </ul>
    </div>
  
</nav>
  )
}
  