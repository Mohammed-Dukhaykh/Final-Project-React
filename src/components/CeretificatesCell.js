import { ListGroup, Card, Button } from "react-bootstrap"
import { useContext, useState } from "react"
import CertificatesEditModel from "./CertificatesEditModel"
import JobsContext from "../utils/JobsContext"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
function CertificatesCell(props) {
  const { Certificate } = props
  const [show, setShow] = useState(false)
  const { deleteCertificate } = useContext(JobsContext)
  return (
    <>
      <Card.Body style={{ textAlign: "center" }}>
        <div className="fw-bold">{Certificate.title}</div>
        {Certificate.authority}
      </Card.Body>
      <Card.Footer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setShow(true)} variant="outline-primary" style={{ marginRight: "10px" }}>
            <EditIcon fontSize="20px" />
          </Button>
          <Button variant="outline-danger" onClick={() => deleteCertificate(Certificate._id)}>
            <DeleteIcon fontSize="20px" />
          </Button>
        </div>
      </Card.Footer>
      <CertificatesEditModel certificate={Certificate} show={show} setShow={setShow} />
    </>
  )
}

export default CertificatesCell
