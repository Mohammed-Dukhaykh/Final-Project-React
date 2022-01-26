import { Button, Card } from "react-bootstrap"
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt"
import DeleteIcon from "@mui/icons-material/Delete"
import { useContext } from "react"
import JobsContext from "../utils/JobsContext"

function ProfilePostCell(props) {
  const { post } = props
  const { deleteProfilePost } = useContext(JobsContext)
  return (
    <>
      <Card style={{ width: "20rem", margin: "20px", borderRadius: "10px" }}>
        <Card.Img variant="top" src={post.photo} style={{ height: "300px" }} />
        <Card.Body>
          <MarkUnreadChatAltIcon fontSize="20px" /> <span>{post.description}</span>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button style={{ marginLeft: "100px" }} variant="outline-danger" onClick={() => deleteProfilePost(post._id)}>
            <DeleteIcon fontSize="20px" />
          </Button>
        </Card.Footer>
      </Card>
    </>
  )
}

export default ProfilePostCell
