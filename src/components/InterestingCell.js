import { useState } from "react"
import { useContext } from "react"
import { ListGroup, Card, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import JobsContext from "../utils/JobsContext"
import DeleteIcon from "@mui/icons-material/Delete"

function InterestingCell(props) {
  const { interest } = props
  const { deleteInterest, profile } = useContext(JobsContext)
  if (!profile) return null
  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        <div className="fw-bold">{interest.name}</div>
      </Card.Body>

      <Card.Footer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="outline-danger" onClick={() => deleteInterest(interest._id)}>
            <DeleteIcon fontSize="20px" />
          </Button>
        </div>
      </Card.Footer>
    </>
  )
}

export default InterestingCell
