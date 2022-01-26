import { useContext } from "react"
import JobsContext from "../utils/JobsContext"
import { Button, Form, Modal, Container, FloatingLabel } from "react-bootstrap"
function ApplyJobModalHome(props) {
  const { applyJob, skills, profile } = useContext(JobsContext)
  if (!profile) return null
  const { show, setShow, job } = props
  console.log(job.questions)
  return (
    <>
      {" "}
      <Modal show={show} size="lg" onHide={() => setShow(false)}>
        <Container>
          <Modal.Header closeButton>
            <Modal.Title>Apply Job</Modal.Title>
          </Modal.Header>
          <Form style={{ margin: "30px" }} onSubmit={e => applyJob(e, job._id)}>
            <Form.Group md={2} className="mb-2" controlId="formBasicEmail">
              <Form.Label as="h5">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your First Name"
                name="firstName"
                value={profile.firstName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label as="h5">Lsst Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Last Name" name="lastName" value={profile.lastName} />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label as="h5">Email </Form.Label>
              <Form.Control type="text" placeholder="Enter Your Email" name="email" value={profile.email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label as="h5">Phone Number </Form.Label>
              <Form.Control type="text" placeholder="Enter Your Phone Number" name="phoneNumber" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Skills</Form.Label>

              {skills.map(skill => (
                <Form.Check type="checkbox" label={skill.skill} value={skill._id} name="skills" />
              ))}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label as="h5">Resume Cv</Form.Label>
              <Form.Control type="file" placeholder="Enter Your Resume" name="cv" accept="application/pdf" />
            </Form.Group>
            {job.questions.length != 0 ? (
              <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label as="h5">Questions</Form.Label>
                </Form.Group>

                {job.questions.map(question => (
                  <>
                    <Form.Label>{question.question}</Form.Label>
                    <Form.Control type="text" name="questions" id={question._id} />
                   
                  </>
                ))}
              </>
            ) : null}
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

export default ApplyJobModalHome
