import { useContext } from "react"
import { Form, Col, Row, Button, Card } from "react-bootstrap"
import NavbarItem from "../components/Navbar"
import JobsContext from "../utils/JobsContext"
import "../SiginupStyle.css"
import { Link } from "react-router-dom"

function SignUp() {
  const { signup } = useContext(JobsContext)

  return (
    <>
      <section class="section-signup">
        <div className="div-container">
          <div className="form-sign">
            <Form onSubmit={signup} className="m-5 d-flex flex-column align-items-center">
              <Card.Header style={{ opacity: "1", color: "black" }} as="h1">
                Sign up{" "}
              </Card.Header>
              <br />

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label style={{ opacity: "1", color: "black" }}>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your First Name" name="firstName" required />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label style={{ opacity: "1", color: "black" }}>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Last Name" required name="lastName" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label style={{ opacity: "1", color: "black" }}>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" required name="email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ opacity: "1", color: "black" }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Your Password" required name="password" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group className="mb-3">
                  <Form.Label style={{ opacity: "1", color: "black" }}>Avatar</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Enter Your Photo"
                    accept="image/png , image/jepg"
                    required
                    name="avatar"
                  />
                </Form.Group>
              </Row>
              <div class="divsignup1" className="d-flex align-items-center justify-content-center">
                <Button
                  style={{
                    backgroundColor: "#ADD8E6",
                    color: "black",
                    border: "none",
                    padding: "10px 30px",
                    letterSpacing: "4px",
                    fontWeight: "bold",
                    opacity: "50",
                  }}
                  variant="primary"
                  type="submit"
                >
                  SIGNUP
                </Button>
              </div>

              <Link to="/login" class="btn">
                <p style={{ fontSize: "18px", marginTop: "8px" }}>I Have an Account</p>
              </Link>
            </Form>
          </div>
          <div>
            <img
              src="https://scontent.fmed1-2.fna.fbcdn.net/v/t39.30808-6/272161159_2145943825558509_5355786000198811349_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=2z0D2ITUzvQAX9KIV96&tn=TieEhei_jtPOUJxM&_nc_ht=scontent.fmed1-2.fna&oh=00_AT9AI91-pp0zqp74fRp3gVgPTkqQI0_w0EwZ4ECQa7uDQw&oe=61F339AD"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp
