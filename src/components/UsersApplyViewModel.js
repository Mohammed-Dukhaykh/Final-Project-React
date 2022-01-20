import { useContext } from "react"
import { Modal, Row, Col, ListGroup, Form, Button } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"

function UsersApplyViewModel(props) {
  const { show, setShow, user } = props
  const {changeProgress} = useContext(JobsContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form className="mt-5" onSubmit={e => changeProgress(e, user.jobId, user._id, )}>
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
                <strong>ResumeCv :</strong> {user.ResumeCv}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Skills :</strong> 
                <ul>
                  {user.skills.map(skill => (
                    <li>{skill.skill}</li>
                  ))}
                  
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Job Progress :</strong>
                <Form.Check
                  type="radio"
                  name="progress"
                  // defaultChecked={film.director._id === director._id}
                  value="Accept"
                  label="Accept"
                />
                <Form.Check
                  type="radio"
                  name="progress"
                  // defaultChecked={film.director._id === director._id}
                  value="No Accept"
                  label="No Accept"
                />
              </ListGroup.Item>
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default UsersApplyViewModel
