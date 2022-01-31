import FeedBarItem from "../FeedbarItem/FeedbarItem"
import FeedbarHeader from "../FeedbarHeader/FeedbarHeader"
import {news} from '../../DummyArray'
export default function Feedbar()
{
  return(
    <div>
    <FeedbarHeader/>
      <div id="feedbarTweet"><p id="text3">Show 101 Tweets</p></div>
     
     {
       news.map((ui,ii)=>(
        <FeedBarItem key={ii} newHour={ui}/>
       ))
      
}
     
    </div>
  )
}