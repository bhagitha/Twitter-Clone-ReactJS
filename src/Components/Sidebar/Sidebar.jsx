import './Sidebar.css'
import OnLineFriends from '../OnlineFriends/OnlineFriends'
import {friends} from  '../../DummyArray'
export default
function Sidebar(){
  return(
    <div>
         <div className="container-fluid" id="bgs">
           <div className="row">
             <div className='col-sm-0' ></div>

             <div className=" col-sm-3" id="mySidenav">
         <i className="fa fa-twitter iconColor" aria-hidden="true"></i><br></br>
        <div id="sideBarFull"><i className="fa fa-home" aria-hidden="true"></i><span id="text1">Home</span></div>
        <div id="sideBarFull"><i className="fa fa-hashtag" aria-hidden="true"></i><span id="text1">Explore</span></div>
        <div id="sideBarFull"><i className="fa fa-bell-o" aria-hidden="true" id="text1"></i><span id="text1">Notification</span></div>
        <div id="sideBarFull"><i className="fa fa-envelope-o" aria-hidden="true"id="text1"></i><span id="text1">Messages</span></div>
        <div id="sideBarFull"><i className="fa fa-bookmark-o" aria-hidden="true"id="text1"></i><span id="text1">Bookmarks</span></div>
        <div id="sideBarFull"><i className="fa fa-list-alt" aria-hidden="true"id="text1"></i><span id="text1">Lists</span></div>
        <div id="sideBarFull"><i className="fa fa-user-o" aria-hidden="true"id="text1"></i><span id="text1">Profile</span></div>
        <div id="sideBarFull"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i><span id="text1">More</span></div><br></br>
        <div id="tweetButton"><h5>Tweet</h5></div>
        <br></br>
          <p>Contacts</p>{
            friends.map((u,i)=>(
          <OnLineFriends key={i} user={u}/>
            ))
           }
         </div>
         </div>
         </div>
          
          </div>
  
  )
}