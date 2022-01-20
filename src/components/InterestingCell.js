import { useState } from "react"
import { useContext } from "react"
import { ListGroup , Card , Button  } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"

function InterestingCell(props) {
    const {interest} = props
    const {deleteInterest} = useContext(JobsContext)
    const [show , setShow] = useState(false)
  return (
    <>
      <ListGroup as="ul">
        <ListGroup.Item as="li" style={{ textAlign: "center" }}>
          <div>
            <div className="fw-bold">{interest.name}</div>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="outline-danger" onClick={() => deleteInterest(interest._id)}>
            Delete
          </Button>
        </div>
      </Card.Footer>
    </>
  )
}

export default InterestingCell
