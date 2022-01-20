import { useContext } from "react"
import JobsContext from "../utils/JobsContext"
import { FloatingLabel, Modal, Container, Form, Button } from "react-bootstrap"

function CompanyEditShow(props) {
  const { show, setShow, job } = props
  const { editJob } = useContext(JobsContext)
  return (
    <>
      {" "}
      <Modal show={show} size="lg" onHide={() => setShow(false)}>
        <Container>
          <Modal.Header closeButton>
            <Modal.Title>Edit Job</Modal.Title>
          </Modal.Header>
          <Form style={{ margin: "30px" }} onSubmit={e => editJob(e, job._id)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Title</Form.Label>
              <Form.Control defaultValue={job.title} type="text" placeholder="Enter Job Title" name="title" />
            </Form.Group>
            <Form.Label>Job Description</Form.Label>
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
              <Form.Control as="textarea" name="description" defaultValue={job.description} />
            </FloatingLabel>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Poster</Form.Label>
              <Form.Control type="url" placeholder="Enter Job Poster" name="poster" defaultValue={job.poster} />
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

export default CompanyEditShow
