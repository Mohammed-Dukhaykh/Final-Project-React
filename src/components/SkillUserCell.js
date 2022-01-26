import { Button, ListGroup, Card } from "react-bootstrap"
function SkillUserCell(props) {
  const { skill } = props
  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Text>{skill.skill}</Card.Text>
      </Card.Body>
    </>
  )
}

export default SkillUserCell
