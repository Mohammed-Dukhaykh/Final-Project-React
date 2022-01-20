import { useContext } from "react"
import { Button, Card } from "react-bootstrap"
import NavbarItem from "../components/Navbar"
import JobsContext from "../utils/JobsContext"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"

function ProfilePost() {
  const { profile , deleteProfilePost } = useContext(JobsContext)
  if (!profile) return null
  return (
    <>
      <NavbarItem />
      {profile.posts.map(post => (
          <>
        <Card style={{ width: "30rem" , marginLeft:"400px" , marginTop:"100px"  }}>
          <Card.Img variant="top" src={post.photo} style={{ height: "250px" }} />
          <Card.Body>
            <ChatBubbleIcon /> <span>{post.description}</span>
          </Card.Body>
       
          <Button onClick={() =>deleteProfilePost(post._id) } variant="outline-danger">
            Delete
        </Button>
         
        </Card>
      
        </>
      ))}
    </>
  )
}

export default ProfilePost
