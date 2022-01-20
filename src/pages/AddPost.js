import { useContext } from "react"
import { Button, Container, Form } from "react-bootstrap"
import NavbarItem from "../components/Navbar"
import JobsContext from "../utils/JobsContext"

function AddPost() {
    const {profileAddPost} = useContext(JobsContext)
  return (
    <>
      <NavbarItem />
      <h1 style={{ textAlign: "center", margin: "40px" }}>Add Post</h1>
      <hr />
      <Container>
        <Form onSubmit={profileAddPost}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="url" name="photo" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default AddPost
