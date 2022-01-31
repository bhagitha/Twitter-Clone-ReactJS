import Sidebar from "../../Components/Sidebar/Sidebar"
import Feedbar from "../../Components/Feedbar/Feedbar"
import Header from  "../../Components/Header/Header"
import Widgets from "../../Components/Widgets/Widgets"

import './Home.css'
// import ProfileHeader from "../../Components/profileHeader/profileHeader"

export default function Home(){
  return(
    
    <div className="containerFluid">
      <Header/>
      <div className="row" id="height"></div>
      <div className="row">
        
        <div className="col-lg-3">
          <Sidebar/>
         
        </div>
        <div className="col-lg-5 ">
          <Feedbar/>
          
        </div>
        <div className="col-lg-4">
        <Widgets/>
        </div>
     
      </div>
    </div>
  )
}