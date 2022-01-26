import { Modal, Row, Col, ListGroup, Form, Button } from "react-bootstrap"
function UsersAcceptViewModel(props) {
  const { show, setShow, user } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View User Apply</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>First Name:</strong> {user.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Last Name:</strong> {user.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email :</strong> {user.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Phone Number :</strong> {user.phoneNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>ResumeCv :</strong>{" "}
            <a href={user.ResumeCv} target="_blank">
              {user.firstName}/{user.lastName}/Resune
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Skills :</strong>
            <ul>
              {user.skills.map(skill => (
                <li>{skill.skill}</li>
              ))}
            </ul>
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

export default UsersAcceptViewModel
