import { useContext } from "react"
import { Button, Form, Modal, Container, FloatingLabel } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
function EditSummaryModel(props) {
    const {show , setShow , summaryProfile} = props
    const {summary} = useContext(JobsContext)
  return (
    <Modal show={show} size="lg" onHide={() => setShow(false)}>
      <Container>
        <Modal.Header closeButton>
          <Modal.Title>Edit Summary</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: "30px" }} onSubmit={summary}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Summary</Form.Label>
            <Form.Control as="textarea" rows={3} name="summary" defaultValue={summaryProfile} />
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

export default EditSummaryModel
