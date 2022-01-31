import './FeedbarItem.css'
import FeedbarHeader from "../FeedbarHeader/FeedbarHeader"
import { useState } from 'react'
export default function FeedBarItem({newHour}){
  const [Like, setLike] = useState("32");
  const [isLike,setIslike]=useState(false)
  const [color,setColor]=useState("iconLike")
 const userLike=()=>{
  if(isLike)
  {
    setLike(Like - 1)
    setColor("iconLike")
  }
  else{
    setLike(Like + 1)
    setColor("iconLike1")
  }
   setIslike(!isLike)
  //  if(Like=="0")
  //  {
  //    setLike("")
  //  }
 }
  return(
    <div>
      <div className='containerFluid' id="feedBarBody">
        <div className="row">
          <div className='col-lg-1'>
            <a href="#">
            <img src={newHour.logoImage} id="img2"/></a></div>
            <div className='col-lg-11'>
            <a href="#"><span id="text4">{newHour.name} </span>
            <img src="https://webstockreview.net/images/twitter-verified-png.png" id="img3"/>
            </a>
            <p id="text5">{newHour.lastSeen}</p>

            <p id="desc"> {newHour.desc}</p>
            {/* <img src="https://pbs.twimg.com/card_img/1478601164266430466/AUBdKCD_?format=jpg&name=small" id="img4"></img> */}
            <div className="card mb-3">
          <img className="card-img-top" src={newHour.img} id="imgid"alt="Card image cap"/>
         <div className="card-body">
         <p className="card-text"><small class="text-muted">{newHour.twitterId}</small></p>
        
               <p class="card-text">{newHour.title}<span></span>
.</p>
           
        </div>
       </div>
            <i className="fa fa-heart" aria-hidden="true" id={color}onClick={userLike} ></i><span>{Like}</span>
            <i className="fa fa-comment-o" aria-hidden="true" id="icon2"></i>
            <i className="fa fa-retweet" aria-hidden="true" id="icon2"></i>
            <i className="fa fa-share-square-o" aria-hidden="true" id="icon2"></i>
          </div>
        </div>
      </div>
    </div>
  )
}