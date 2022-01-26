import { useContext } from "react"
import { Button, ListGroup, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import JobsContext from "../utils/JobsContext"
import DeleteIcon from "@mui/icons-material/Delete"

function SkillsCell(props) {
  const { skill } = props
  const { deleteSkill, profile } = useContext(JobsContext)
  if (!profile) return null

  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Text>{skill.skill}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="outline-danger" onClick={() => deleteSkill(skill._id)}>
            <DeleteIcon fontSize="20px" />
          </Button>
        </div>
      </Card.Footer>
    </>
  )
}

export default SkillsCell
