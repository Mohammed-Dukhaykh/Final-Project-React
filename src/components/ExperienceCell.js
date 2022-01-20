import { useContext } from "react"
import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
import EditExperienceModel from "./EditExperienceModel"
function ExperienceCell(props) {
    const {experience} = props
    const [show , setShow] = useState(false)
    const {deleteExperience} = useContext(JobsContext)
  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>Company</Card.Title>
        <Card.Text>{experience.company}</Card.Text>
        <Card.Title>Job Title</Card.Title>
        <Card.Text>
          {experience.jobtitle}
        </Card.Text>
        <Card.Title>Date</Card.Title>
        <Card.Text>
        <h6>From</h6>
          {experience.start}
          <h6>To</h6>
          {experience.start}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setShow(true)} variant="outline-primary" style={{ marginRight: "10px" }}>
            Edit
          </Button>
          <Button variant="outline-danger" onClick={() => deleteExperience(experience._id)}>
            Delete
          </Button>
        </div>
      </Card.Footer>
      <EditExperienceModel show={show} setShow={setShow} experience={experience} />
    </>
  )
}

export default ExperienceCell
