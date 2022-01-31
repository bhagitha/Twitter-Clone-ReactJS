import './profileHeader.css'
import { Lock } from '@material-ui/icons'; 
import { Place } from '@material-ui/icons'; 
import {ChildCare } from '@material-ui/icons'; 
import {DateRange } from '@material-ui/icons'; 
import FeedBarItem from '../FeedbarItem/FeedbarItem';

export default function ProfileHeader() {
  return(
    <div>
      
      <div id="imagepart">
        
        <div  className="containerFluid" id="backgroundImage">
          <div class="row" id="blank"></div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-3">
            <img src="https://pbs.twimg.com/profile_images/1478358536232914946/KJZUEkaK_400x400.jpg"id="img5"></img>
            </div>
           <div className="col-sm-2 offset-8" id="edit" ><button className="btn btn-outline-primary" id="btn1">Edit Profile</button></div>
          </div>
        </div>
        
      </div>
      <h4>Jihana Gafoor<Lock/></h4>
      <p id="text8">@jihanagafoor</p>
      <p>Student</p>
      <Place/>< span id="text10">Vatakara</span>
      <ChildCare/>< span id="text10">Born November 11,1998</span>
      <DateRange/>< span id="text10">Joined Augest 2017</span><br></br><br></br>
      <span id="text12">22</span><span id="text11"> Followers</span>
      <span id="text12">20</span><span id="text11"> Following</span><br></br><br></br>
      
    </div>
  )
  
}