import { useContext } from "react"
import { Button, Form, Modal, Container, FloatingLabel } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
function AddUserPostModal(props) {
    const {show , setShow} = props
    const {profileAddPost} = useContext(JobsContext)
  return (
    <>
      {" "}
      <Modal show={show} size="lg" onHide={() => setShow(false)}>
        <Container>
          <Modal.Header closeButton>
            <Modal.Title>Add Post</Modal.Title>
          </Modal.Header>
          <Form style={{ margin: "30px" }} onSubmit={profileAddPost}>
            <Form.Label>post Description</Form.Label>
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
              <Form.Control as="textarea" name="description" />
            </FloatingLabel>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>post Poster</Form.Label>
              <Form.Control type="file" placeholder="Enter post Poster" accept="image/png , image/jepg" name="photo" />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={() => setShow(false)}>
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Container>
      </Modal>
    </>
  )
}

export default AddUserPostModal
