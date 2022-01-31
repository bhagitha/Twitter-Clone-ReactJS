import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import './App.css';
import  {react} from  "react-dom"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
   
     <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<Home/>}>  </Route>
       <Route path="/Login" element={<Login/>}>  </Route>
       <Route path="/Profile" element={<Profile/>}>  </Route>
       <Route path="/Register" element={<Register/>}>  </Route>
     </Routes>
     </BrowserRouter>
  //<Profile/>
    // <Home/>
    // <Login/>
    // <Register/>
   
  
  
  );
}

export default App;
