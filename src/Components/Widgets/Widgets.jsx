import './Widgets.css'
import WidgetsItem from '../WidgetsItem/WidgetsItem'
import {sideNews} from '../../DummyArray'
import OnLineFriends from '../OnlineFriends/OnlineFriends'

import {friends} from '../../DummyArray'
export default function Widgets({profile}){
  const ProfileWidgets=()=>{
    return(
      <div>
         {
      sideNews.map((data,index)=>(
        <WidgetsItem key={index} data={data}/>
      ))
    
}
{
            friends.map((u,i)=>(
          <OnLineFriends key={i} user={u}/>
            ))
           }
      </div>
        
    )
  };
  const HomeWidgets=()=>{
    return(
      <div>
         {
      sideNews.map((data,index)=>(
        <WidgetsItem key={index} data={data}/>
      ))
    
}
      </div>

    )
  }
  
  return(
    
    <div id="widgets"> 
       
       
<form className="example" style={{margin:"auto",maxwidth:"200px"}}>
  
<button type="submit"><i class="fa fa-search" id="icon5"></i></button>
  <input type="text" placeholder="Search.." name="search2"/>
  </form>
  <br></br>
  <div id="rightBar">
    <p id="rightHeader">What's happening</p>
{
  profile ? <ProfileWidgets/> : <HomeWidgets/>
}
    
  </div>
    </div>
  )
}