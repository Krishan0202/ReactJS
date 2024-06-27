import "./SignUp.css";
// import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="container">
      <h1>Instagram</h1>
      <input type="text" placeholder="Mobile number or Email" />
      <input type="text" placeholder="Full name" />
      <input type="text" placeholder="User name" />
      <input type="password" placeholder="Password" />
      <button>Sign up</button>

      <h3>
        have an account ?  <a href="">Log In</a>
      </h3>
    </div>
  );
}

export default SignUp;
