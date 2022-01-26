import { useContext } from "react"
import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
import EditExperienceModel from "./EditExperienceModel"
import Moment from "react-moment"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
function ExperienceCell(props) {
  const { experience } = props
  const [show, setShow] = useState(false)
  const { deleteExperience } = useContext(JobsContext)
  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>Company</Card.Title>
        <Card.Text>{experience.company}</Card.Text>
        <Card.Title>Job Title</Card.Title>
        <Card.Text>
          {experience.jobtitle}
          <p>
            <Moment format="YYYY">{experience.start}</Moment>-<Moment format="YYYY">{experience.end}</Moment>{" "}
          </p>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setShow(true)} variant="outline-primary" style={{ marginRight: "10px" }}>
            <EditIcon fontSize="20px" />
          </Button>
          <Button variant="outline-danger" onClick={() => deleteExperience(experience._id)}>
            <DeleteIcon fontSize="20px" />
          </Button>
        </div>
      </Card.Footer>
      <EditExperienceModel show={show} setShow={setShow} experience={experience} />
    </>
  )
}

export default ExperienceCell
