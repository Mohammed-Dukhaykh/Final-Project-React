import { useContext, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Profile from "../pages/Profile"
import JobsContext from "../utils/JobsContext"
import EditEducationModel from "./EditEducationModel"

function EducationCell2(props) {
  const { educationItem } = props
  const [show, setShow] = useState(false)
  const { deleteEducation } = useContext(JobsContext)
  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>university</Card.Title>
        <Card.Text>{educationItem.university}</Card.Text>
        <Card.Title>Field</Card.Title>
        <Card.Text>
          {educationItem.degree} {educationItem.field}{" "}
        </Card.Text>
        <Card.Title>Date</Card.Title>
        <Card.Text>
          {educationItem.start}
          <h5>To</h5>
          {educationItem.start}
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setShow(true)} variant="outline-primary" style={{ marginRight: "10px" }}>
            Edit
          </Button>
          <Button variant="outline-danger" onClick={() => deleteEducation(educationItem._id)}>
            Delete
          </Button>
        </div>
      </Card.Footer>

      <EditEducationModel show={show} setShow={setShow} education={educationItem} />
    </>
  )
}

export default EducationCell2
