import { Button, Image, ListGroup, Modal } from "react-bootstrap"
function CompanyViewPost(props) {
    const {show , setShow , post} = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Description:</strong> {post.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Poster:</strong>{" "}
            <img src={post.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CompanyViewPost
