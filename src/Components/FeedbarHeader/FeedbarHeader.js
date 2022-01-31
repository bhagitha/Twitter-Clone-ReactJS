
import './feedbarHeader.css'
// import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
export default function FeedbarHeader()
{
  return(
    <div >
      <div id="feedBarHeader">
      <div id="home" className="fixedTop"><h5 >Home</h5></div>
      <img src="https://pbs.twimg.com/profile_images/1478358536232914946/KJZUEkaK_400x400.jpg" id="img1"/>
      <span id="text2">What's happening</span>
      <div>
        <i class="fa fa-share-alt" aria-hidden="true" id="icon1"></i> 
        <i class="fa fa-retweet" aria-hidden="true" id="icon1"></i>
        <i class="fa fa-map-marker" aria-hidden="true" id="icon1"></i>
        <i class="fa fa-smile-o" aria-hidden="true" id="icon1"></i>
        <button className="btn  pull-right" id="button1">Tweet</button>
      </div>
    </div>
    <div>
      
    </div>
    </div>
  )
}
