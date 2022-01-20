import { useContext } from "react"
import { Button, ListGroup , Card } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"

function SkillsCell(props) {
    const {skill} = props
    const {deleteSkill} = useContext(JobsContext)
    
  return (
    <>
      <ListGroup as="ul" >
        <ListGroup.Item as="li" className="d-flex justify-content-center align-items-center">
          <div style={{textAlign:"center"}}>
            <div className="fw-bold">{skill.skill}</div>
          </div>
        </ListGroup.Item>
        <Card.Footer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="outline-danger" onClick={() => deleteSkill(skill._id) }>Delete</Button>
        </div>
      </Card.Footer>
      </ListGroup>
    </>
  )
}

export default SkillsCell
