import './OnlineFriends.css'
import {FiberManualRecord} from '@material-ui/icons'
export default function OnLineFriends({user}){
  return(
    <div className="containerFluid" id="bgg">
      <div className="row"></div>
      <div className="row">
        <div>
          
          <div class="card" id="card">
        <div class="row no-gutters">
            <div class="col-auto">
              <div>
            
            {/* <span id="online"></span> */}
                <img src={user.image}  id="imgg"class="img-fluid" />
                <FiberManualRecord id="online"/>
               </div>
                
            </div>
            <div class="col">
                <div class="card-block px-2">
                <h6 class="card-title" id="name"></h6>
                    <h6 class="card-title" id="name">{user.name}</h6>
                </div>
            </div>
        </div>
       
  </div>
        </div>
      </div>
    </div>
  )
}