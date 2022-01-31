import OnLineFriends from "../OnlineFriends/OnlineFriends"
import {friends} from '../../DummyArray'
export default function WidgetsItem({data}){
  
  
    return(
      <div style={{paddingLeft:"50px"}}>
      <div class="row">
            <div class="col-sm-6">
                <div class="card" style={{backgroundColor:"#dbdee0",border:"none",width:"350px"}}>
                    <div class="row card-body">
                       <div class="col-sm-6">
                          <p class="card-title" style={{color:"grey"}}>{data.twitterId}</p>
                           <h6 class="card-text">{data.name}</h6>
                           
                        </div>
                        <img class="col-sm-6" style={{height:"100px",width:"200px"}} src={data.image} />
                    </div>
                </div>
            </div>
  </div>
    </div>
        
    )
  }
  
