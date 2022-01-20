import { useContext } from "react"
import { Button, Form, Modal, Container, FloatingLabel } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
function EditExperienceModel(props) {
  const { experience , show , setShow } = props
  const { EditExperience } = useContext(JobsContext)
  return (
    <Modal show={show} size="lg" onHide={() => setShow(false)}>
      <Container>
        <Modal.Header closeButton>
          <Modal.Title>Edit Education</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: "30px" }} onSubmit={e => EditExperience(e, experience._id)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your University"
              name="company"
              defaultValue={experience.company}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Degree : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your University"
              name="jobTitle"
              defaultValue={experience.jobtitle}
            />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Start Date : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Start Date"
              name="start"
              defaultValue={experience.start}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>End Date : </Form.Label>
            <Form.Control type="text" placeholder="Enter Your End Date" name="end" defaultValue={experience.end} />
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

export default EditExperienceModel
