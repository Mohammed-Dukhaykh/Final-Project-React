import { useContext } from "react"
import { Button, Form, Modal, Container, FloatingLabel } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
function EditEducationModel(props) {
  const { show, setShow, education } = props
  const degreeAction = ["Associate", "Bachelor's", "Master's", "Doctoral"]
  const { EditEducation } = useContext(JobsContext)
  return (
    <Modal show={show} size="lg" onHide={() => setShow(false)}>
      <Container>
        <Modal.Header closeButton>
          <Modal.Title>Edit Education</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: "30px" }} onSubmit={e => EditEducation(e, education._id)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>University</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your University"
              name="university"
              defaultValue={education.university}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Degree : </Form.Label>
            {degreeAction.map(deg => (
              <Form.Check type="radio" label={deg} value={deg} name="degree" defaultChecked={education.degree == deg} />
            ))}
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Field : </Form.Label>
            <Form.Control type="text" placeholder="Enter Your Field" name="field" defaultValue={education.field} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Start Date : </Form.Label>
            <Form.Control type="text" placeholder="Enter Your Start Date" name="start" defaultValue={education.start} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>End Date : </Form.Label>
            <Form.Control type="text" placeholder="Enter Your End Date" name="end" defaultValue={education.end} />
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

export default EditEducationModel
