
import Sidebar from "../../Components/Sidebar/Sidebar"
import Header from  "../../Components/Header/Header"
import Widgets from "../../Components/Widgets/Widgets"
import ProfileHeader from "../../Components/profileHeader/profileHeader"
import FeedBarItem from "../../Components/FeedbarItem/FeedbarItem"
import { Lock } from '@material-ui/icons'; 
import {news} from '../../DummyArray'
import './Profile.css'
export default function Profile(){
  return(
    <div className="containerFluid" id="bggg">
   <Header/>
       <div className="row" id="height"></div>
       <div className="row">
      
        <div className="col-lg-3">
           <Sidebar/>
         </div>
         <div className="col-lg-5 ">
           <div id="profileheader"><i className="fa fa-arrow-left" aria-hidden="true"></i>
      <span id="text6">JIHANA GAFOOR</span><Lock/>
      <p id="text7"> 10 Tweets</p>
      </div>
        <ProfileHeader/>
        {
       news.map((ui,ii)=>(
        <FeedBarItem key={ii} newHour={ui}/>
       ))
      
}
        </div>
        <div className="col-lg-4">
           <Widgets profile/>
         </div>
    </div>
     </div>

  )
}