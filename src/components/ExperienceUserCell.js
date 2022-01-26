import { Button, Card } from "react-bootstrap"
import Moment from "react-moment"

function ExperienceUserCell(props) {
    const { experience } = props
    return ( <> <Card.Body style={{ textAlign: "center" }}>
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

 </> );
}

export default ExperienceUserCell;