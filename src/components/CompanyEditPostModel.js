import { useContext } from "react"
import { Button, Form, Modal, Container, FloatingLabel } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
function CompanyEditPostModel(props) {
  const { show, setShow, post } = props
  const { editCompanyPost } = useContext(JobsContext)
  return (
    <Modal show={show} size="lg" onHide={() => setShow(false)}>
      <Container>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: "30px" }} onSubmit={e => editCompanyPost(e, post._id)}>
          <Form.Label>post Description</Form.Label>
          <FloatingLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control as="textarea" name="description" defaultValue={post.description} />
          </FloatingLabel>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>post Poster</Form.Label>
            <Form.Control type="file" placeholder="Enter post Poster" name="photo" id={post.photo} />
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
  )
}

export default CompanyEditPostModel
