import { ListGroup, Card, Button } from "react-bootstrap"
function CertificatesUserCell(props) {
  const { Certificate } = props
  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        <div className="fw-bold">{Certificate.title}</div>
        {Certificate.authority}
      </Card.Body>
    </>
  )
}

export default CertificatesUserCell
