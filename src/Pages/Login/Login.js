// import { Notifications } from '@material-ui/icons'; 
import './Login.css'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
export default function Login() {
  return(
    <div className="containerFluid" id="bg4">
      <div className="row" id="blank2"></div>
      <div className="row">
        <div className='col-sm-2'></div>
       <div className='col-sm-4'>
       <i class="fa fa-twitter" aria-hidden="true" id="icon"></i><span id="twitter">Twitter</span>
       <p id="text9">Twitter helps you connect and share with the people in your life.</p>
         </div>
         {/* <div className='col-sm-2'></div> */}
         <div className='col-sm-4' id="box1">
         <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <div className="d-grid gap-2">
  <Button variant="primary" size="lg" id="login">
   <h4>Log In</h4>
  </Button>
</div><br></br>
<p id="forgot"><a href="#" >Forgot Password</a></p>
<hr></hr>
<div id="btn" className='col-sm-12'>
  <Button variant="success" size="lg" id="login">
   <h4>Create New Account</h4>
  </Button>
</div>
</Form>
         </div>
         <div className='col-sm-1'></div>
      </div>
    </div>
  )
}