
import './Register.css'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
export default function Register() {
  return(
    <div className="containerFluid" id="bg4">
      <div className="row">
        <div className='col-sm-4'></div>
       <div className='col-sm-4'>
       <i className="fa fa-twitter" aria-hidden="true" id="icon"></i><span id="twitter">Twitter</span>
      <div id="box">
        <h5 style={{textAlign:"center"}}>Create a New Account</h5>
        <p style={{textAlign:"center",color:"grey"}}>It's quick And Easy</p>
        <hr></hr>
        <form>
        <div class="form-row">
    <div class="col-md-6 mb-3">
      
      <input type="text" class="form-control" id="validationDefault01" placeholder="First name" required/>
    </div>
    <div className="col-md-6 mb-3">
     
      <input type="text" class="form-control" id="validationDefault02" placeholder="Last name"  required/>
    </div>
    <div class="form-group col-lg-12">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group col-lg-12">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group col-lg-4">
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Date" />
    <small id="emailHelp" class="form-text text-muted">Date of birth</small>
</div>
<div class="form-group col-lg-4">
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Month"/>
    
  
  </div>
  <div class="form-group col-lg-4">
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Year"/>
    
  
  </div>
  <div class="form-group col-lg-4">
    <input type="radio"  name="xxxx"/>Male
    <small id="emailHelp" class="form-text text-muted">Gender</small>
</div>
<div class="form-group col-lg-4">
    <input type="radio"name="xxxx"/>Female
    
  
  </div>
  <div class="form-group col-lg-4">
    <input type="radio" name="xxxx"/>Custom
    </div>
    <div className="d-grid gap-2 col-sm-12" id="login">
  <Button variant="success" size="lg">
    Create New Account
  </Button>
  <a href="#">Already Have an Account</a>
</div>
    </div>
        </form>
      </div>
         </div>
         <div className='col-sm-1'></div>
      </div>
    </div>
  )
}