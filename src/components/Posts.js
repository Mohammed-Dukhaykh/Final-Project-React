import { useContext } from "react"
import { Card, Button } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import { RiUserFollowFill } from "react-icons/ri"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import PersonRemoveIcon from "@mui/icons-material/PersonRemove"
import { Link } from "react-router-dom"

function Posts() {
  const { posts, follow, profile } = useContext(JobsContext)
  if (!profile) return <h1>Loading ...</h1>
  const user = profile.followwnig.map(follow => follow._id)
  console.log(user)
  return (
    <>
      <hr />
      {posts.map(post => (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Card style={{ width: "26rem", margin: "20px" }}>
            <Card.Header>
              {post.ownerUser ? (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                  <>
                    {post.ownerUser._id.toString() != profile._id ? (
                      <Link className="btn" to={`/user/${post.ownerUser._id}`}>
                        <img
                          class="rounded-circle"
                          style={{ objectFit: "cover" , marginRight:"70px" }}
                          width={50}
                          height={50}
                          src={post.ownerUser.avatar}
                          data-holder-rendered="true"
                         
                        />{" "}
                        {post.ownerUser.firstName} {post.ownerUser.lastName}{" "}
                      </Link>
                    ) : (
                      <>
                        <img
                          class="rounded-circle"
                          style={{ objectFit: "cover" }}
                          width={50}
                          height={50}
                          src={post.ownerUser.avatar}
                          data-holder-rendered="true"
                        />{" "}
                        {post.ownerUser.firstName} {post.ownerUser.lastName}
                      </>
                    )}
                  </>
                  {post.ownerUser._id.toString() != profile._id ? (
                    <h5>
                      {post.ownerUser && !user.includes(post.ownerUser._id) ? (
                        <Button onClick={() => follow(post.ownerUser._id)} variant="light">
                          <PersonAddAltIcon sx={{ fontSize: 23 }} />
                        </Button>
                      ) : (
                        <Button onClick={() => follow(post.ownerUser._id)} variant="light">
                          <PersonRemoveIcon sx={{ fontSize: 23 }} />
                        </Button>
                      )}
                    </h5>
                  ) : null}
                </div>
              ) : (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                  <>
                    <img
                      class="rounded-circle"
                      style={{ objectFit: "cover" }}
                      width={50}
                      height={50}
                      src={post.ownerCompany.avatar}
                      data-holder-rendered="true"
                    />{" "}
                    {post.ownerCompany.companyName}{" "}
                  </>
                </div>
              )}
            </Card.Header>
            <Card.Img variant="top" src={post.photo} style={{ height: "250px" }} />
            <Card.Body>
              <ChatBubbleIcon /> <span>{post.description}</span>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  )
}

export default Posts
