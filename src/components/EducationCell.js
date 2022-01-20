import { useContext, useState } from "react"
import { Button, Card } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
import EditEducationModel from "./EditEducationModel"

function EducationCell(props) {
  const { education } = props
  const [show, setShow] = useState(false)
  const {deleteEducation} = useContext(JobsContext)
  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>university</Card.Title>
        <Card.Text>{education.university}</Card.Text>
        <Card.Title>Field</Card.Title>
        <Card.Text>
          {education.degree} {education.field}{" "}
        </Card.Text>
        <Card.Title>Date</Card.Title>
        <Card.Text>
          {education.start}
          <h5>To</h5>
          {education.start}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setShow(true)} variant="outline-primary" style={{ marginRight: "10px" }}>
            Edit
          </Button>
          <Button variant="outline-danger" onClick={() => deleteEducation(education._id)}>Delete</Button>
        </div>
      </Card.Footer>
      <EditEducationModel show={show} setShow={setShow} education={education} />
    </>
  )
}

export default EducationCell
