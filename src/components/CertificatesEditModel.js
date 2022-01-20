import { useContext } from "react"
import { Button, Form, Modal, Container, FloatingLabel } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
function CertificatesEditModel(props) {
  const { certificate, show, setShow } = props
  const {editCertificate} = useContext(JobsContext)
  return (
    <Modal show={show} size="lg" onHide={() => setShow(false)}>
      <Container>
        <Modal.Header closeButton>
          <Modal.Title>Edit Certificate</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: "30px" }} onSubmit={e => editCertificate(e, certificate._id)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" name="title" defaultValue={certificate.title} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Authority : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Authority"
              name="authority"
              defaultValue={certificate.authority}
            />
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

export default CertificatesEditModel
