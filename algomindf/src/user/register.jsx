import React from "react";
import notebook1 from "./notebook1.png"
import boy from "./boy.png";
import './register.css';


const Register = () =>{
    return(
    <div className="try">
    <h1 className="sign">Sign Up</h1>
      <div className="image-container">
        <img className="Note" src={notebook1} alt="" />
        <div className="form-container">
          {/* Add your form elements here */}
          <form>
            {/* Form input fields go here */}
            <input type="text" id="username" name="username" placeholder="Username"/>

            <input type="email" id="email" name="email" placeholder="Email"/>

            <input type="password" id="password" name="password" placeholder="Password" />

            <button type="submit">Submit</button>
          </form>
          <small>By signing up for AlgoMind, you agree to AlgoMind's</small>
        <div>
        <a href="/">Terms of Service</a> & <a href="/">Privacy Policy</a>.
        </div>
          <h5><b>Or sign up using:</b></h5>
        </div>
      </div>
      <div className="newb">
        <img className="boyy" src={boy} alt="" />
      </div>
    </div>
    )
}
export default Register