import { useContext } from "react"
import { Form , Modal , Button } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"

function EditProfileModal(props) {
    const {show , setShow , profile} = props
    const {editProfile} = useContext(JobsContext)
    if (!profile) return null
  return (
    <Modal onSubmit={editProfile} show={show} onHide={() => setShow(false)} >
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" defaultValue={profile.firstName}  name="firstName" />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" defaultValue={profile.lastName} name="lastName" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"  name="password"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Avatar</Form.Label>
            <Form.Control type="file" name="avatar" id={profile.avatar}  />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default EditProfileModal
