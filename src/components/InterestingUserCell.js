import { ListGroup, Card, Button } from "react-bootstrap"
function InterestingUserCell(props) {
  const { interest } = props
  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        <div className="fw-bold">{interest.name}</div>
      </Card.Body>
    </>
  )
}

export default InterestingUserCell
