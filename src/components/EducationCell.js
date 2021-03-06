import { useContext, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Profile from "../pages/Profile"
import JobsContext from "../utils/JobsContext"
import EditEducationModel from "./EditEducationModel"
import mom from "react-moment"
import Moment from "react-moment"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function EducationCell(props) {
  const { educationItem } = props
  const { deleteEducation } = useContext(JobsContext)
  const [show, setShow] = useState(false)

  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>university</Card.Title>
        <Card.Text>{educationItem.university}</Card.Text>
        <Card.Title>Field</Card.Title>
        <Card.Text>
          {educationItem.degree} {educationItem.field}{" "}
        </Card.Text>
        <Card.Title>Duration</Card.Title>
        <Card.Text>
          <p>
            <Moment format="YYYY">{educationItem.start}</Moment>
            -
            <Moment format="YYYY">{educationItem.end}</Moment>
          </p>
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setShow(true)} variant="outline-primary" style={{ marginRight: "10px" }}>
          <EditIcon fontSize="20px" />
          </Button>
          <Button variant="outline-danger" onClick={() => deleteEducation(educationItem._id)}>
           <DeleteIcon fontSize="20px" />
          </Button>
        </div>
      </Card.Footer>

      <EditEducationModel show={show} setShow={setShow} education={educationItem} />
    </>
  )
}

export default EducationCell
