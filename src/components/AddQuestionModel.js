import { useContext } from "react"
import { Form, ListGroup, Modal, Button } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"

function AddQuestionModel(props) {
  const { show, setShow, job } = props
  const { addQuestion } = useContext(JobsContext)
  return (
      <Modal show={show} onHide={() => setShow(false)}>
          <Form onSubmit={(e) => addQuestion(e, job._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>Qustion:</strong>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Job Title" name="question" />
              </Form.Group>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button type="submit" variant="secondary">
            Add
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
   
  )
}

export default AddQuestionModel
