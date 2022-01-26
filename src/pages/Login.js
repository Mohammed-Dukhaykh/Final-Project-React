import { useContext } from "react"
import { Form, Row, Col, Button, Container } from "react-bootstrap"
import NavbarItem from "../components/Navbar"
import JobsContext from "../utils/JobsContext"
import "../LoginStyle.css"
import { Link } from "react-router-dom"

function Login() {
  const { login } = useContext(JobsContext)
  return (
    <section class="owner-div">
      <div class="cont">
        <form onSubmit={login}>
        <div class="form-login sign-in">
          <h2 class="h2-login">Sign In</h2>
          <label class="label-login">
            <span>Email Address</span>
            <input class="inp-login" type="email" name="email" />
          </label>
          <br />
          <label  class="label-login">
            <span>Password</span>
            <input class="inp-login" type="password" name="password" />
          </label>
          <button class="submit-login" type="submit">
            Sign In
          </button>
          <Link to="/signup" class="btn">
          <p class="create-account" >Create A Account</p>
          </Link>
        
        </div>
       
        </form>
        <div class="sub-cont">
          <div class="img-login">
         <img src="https://scontent.fmed1-2.fna.fbcdn.net/v/t39.30808-6/272161159_2145943825558509_5355786000198811349_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=2z0D2ITUzvQAX9KIV96&tn=TieEhei_jtPOUJxM&_nc_ht=scontent.fmed1-2.fna&oh=00_AT9AI91-pp0zqp74fRp3gVgPTkqQI0_w0EwZ4ECQa7uDQw&oe=61F339AD" alt="" />
          </div>
        </div>
      </div>
      </section>
  )
}

export default Login
