import { ListGroup , Card , Button } from "react-bootstrap"
import { useContext, useState } from "react"
import CertificatesEditModel from "./CertificatesEditModel"
import JobsContext from "../utils/JobsContext"
function CertificatesCell(props) {
  const { Certificate } = props
  const [show , setShow] = useState(false)
  const {deleteCertificate} = useContext(JobsContext)
  return (
      <>
    <ListGroup as="ul">
      <ListGroup.Item as="li"style={{textAlign:"center"}}>
        <div >
          <div className="fw-bold">{Certificate.title}</div>
          {Certificate.authority}
        </div>
      </ListGroup.Item>
    </ListGroup>
      <Card.Footer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => setShow(true)} variant="outline-primary" style={{ marginRight: "10px" }}>
          Edit
        </Button>
        <Button variant="outline-danger" onClick={() => deleteCertificate(Certificate._id)}>Delete</Button>
      </div>
    </Card.Footer>
    <CertificatesEditModel certificate={Certificate} show={show} setShow={setShow} />
    </>
  )
}

export default CertificatesCell
