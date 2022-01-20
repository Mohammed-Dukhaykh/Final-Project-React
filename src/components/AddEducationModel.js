import { useContext } from "react"
import JobsContext from "../utils/JobsContext"
import { Button, Form, Modal, Container, FloatingLabel } from "react-bootstrap"

function AddEducationModel(props) {
  const { show, setShow } = props
  const {AddEducation} = useContext(JobsContext)
  const degreeAction = ["Associate", "Bachelor's", "Master's", "Doctoral"]
  return (
    <Modal show={show} size="lg" onHide={() => setShow(false)}>
      <Container>
        <Modal.Header closeButton>
          <Modal.Title>Add Education</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: "30px" }} onSubmit={AddEducation}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>University</Form.Label>
            <Form.Control type="text" placeholder="Enter Your University" name="university" />
          </Form.Group>
          <Form.Group>
          <Form.Label>Degree : </Form.Label>
          {degreeAction.map(deg => (
            <Form.Check type="radio" label={deg} value={deg} name="degree" />
          ))}
          </Form.Group>
          <br />
           <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Field : </Form.Label>
            <Form.Control type="text" placeholder="Enter Your Field" name="field" />
          </Form.Group>
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

export default AddEducationModel
