import { useContext } from "react"
import { Button, Form, Modal, Container, FloatingLabel } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
function AddExperienceModel(props) {
    const {show , setShow} = props
    const {AddExperience} = useContext(JobsContext)
  return (
    <Modal show={show} size="lg" onHide={() => setShow(false)}>
      <Container>
        <Modal.Header closeButton>
          <Modal.Title>Add Experience</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: "30px" }} onSubmit={AddExperience}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Enter Company" name="company" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Job Title : </Form.Label>
            <Form.Control type="text" placeholder="Enter Job Title" name="jobTitle" />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Start Date : </Form.Label>
            <Form.Control type="text" placeholder="Enter Your Start Date" name="start" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>End Date : </Form.Label>
            <Form.Control type="text" placeholder="Enter Your End Date" name="end" />
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

export default AddExperienceModel
