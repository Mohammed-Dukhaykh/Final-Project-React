import { useContext } from "react"
import JobsContext from "../utils/JobsContext"
import { Button, Form, Modal, Container, FloatingLabel } from "react-bootstrap"
function AddSkillsModel(props) {
    const {show , setShow} = props
    const {skills , AddSkills , profile} = useContext(JobsContext)
    const a = profile.skills.map(skill => skill._id)
    const b = skills.filter(skill => profile.skills.find(qq => qq == skill._id ))
    console.log(b)
    console.log(a)
  return (
    <>
      {" "}
      <Modal show={show} size="lg" onHide={() => setShow(false)}>
        <Container>
          <Modal.Header closeButton>
            <Modal.Title>Add Skills</Modal.Title>
          </Modal.Header>
          <Form style={{ margin: "30px" }} onSubmit={AddSkills}>
            <Form.Group>
              <Form.Label>Skills : </Form.Label>
              {skills.map(skill => (
                <Form.Check type="checkbox" label={skill.skill} value={skill._id} name="skills" />
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
    </>
  )
}

export default AddSkillsModel
