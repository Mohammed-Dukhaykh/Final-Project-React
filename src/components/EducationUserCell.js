import { Button, Card } from "react-bootstrap"
import Moment from "react-moment"
function EducationUserCell(props) {
  const { educationItem } = props
  return (
    <>
      {" "}
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
            <Moment format="YYYY">{educationItem.start}</Moment>-<Moment format="YYYY">{educationItem.end}</Moment>
          </p>
        </Card.Text>
      </Card.Body>
    </>
  )
}

export default EducationUserCell
