import { useContext } from "react";
import { Form , Row , Col , Button } from "react-bootstrap";
import NavbarItem from "../components/Navbar";
import JobsContext from "../utils/JobsContext";

function Login() {
    const {login} = useContext(JobsContext)
    return (  
      <> 
     <NavbarItem />
    <div className="ms-4 mt-5">
    <h1>Login</h1>
    <Form  className="mt-5" onSubmit={login} >
      <Form.Group as={Row} className="mb-3">
        <Form.Label column md="2">
          Email
        </Form.Label>
        <Col md="6">
          <Form.Control name="email" type="text" required />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column md="2">
          Password
        </Form.Label>
        <Col md="6">
          <Form.Control name="password" type="password" required />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-4">
        <Col md={{ span: 10, offset: 2 }}>
          <Button type="submit">Login</Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
    </> );
}

export default Login;