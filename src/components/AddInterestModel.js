import { useContext } from "react"
import JobsContext from "../utils/JobsContext"
import { Button, Form, Modal, Container, FloatingLabel } from "react-bootstrap"

function AddInterestModel(props) {
  const { show, setShow } = props
  const { AddInterest, interests } = useContext(JobsContext)
  return (
    <Modal show={show} size="lg" onHide={() => setShow(false)}>
      <Container>
        <Modal.Header closeButton>
          <Modal.Title>Add Interesting</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: "30px" }} onSubmit={AddInterest}>
          <Form.Group>
            <Form.Label>Interest : </Form.Label>
            {interests.map(interest => (
              <Form.Check type="checkbox" label={interest.name} value={interest._id} name="interest" />
            ))}
          </Form.Group>
          <br />
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

export default AddInterestModel
