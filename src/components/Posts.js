import { useContext } from "react"
import { Card, Button } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import { RiUserFollowFill } from "react-icons/ri"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import PersonRemoveIcon from "@mui/icons-material/PersonRemove"
import { Link } from "react-router-dom"
import AddBoxIcon from "@mui/icons-material/AddBox"
import "../PostsStyle.css"
import { useState } from "react"
import AddUserPostModal from "./AddUserPostModal"
import Moment from "react-moment"

function Posts() {
  const { posts, follow, profile, getOneProfile } = useContext(JobsContext)
  const [show, setShow] = useState(false)
  if (!profile) return <h1>Loading ...</h1>
  const user = profile.followwnig.map(follow => follow._id)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <>
      <section className="section-postt">
        {" "}
        <h1 className="name-post">Posts</h1>
        <hr />
        <div onClick={() => setShow(true)} style={{ textAlign: "center", marginBottom: "60px", cursor: "pointer" }}>
          <h3 style={{ color: "#165da5" }}>
            Add Post <AddBoxIcon />{" "}
          </h3>
        </div>
        <AddUserPostModal show={show} setShow={setShow} />
        <div class="container-po">
          {posts.map(post => (
            <>
              <div class="card-po">
                <div class="card-header-po">
                  <img src={post.photo} alt="" />
                </div>
                <div class="card-body-po">
                  <span className="text-muted">
                    <Moment format="HH:mm ,MM/dd">{post.date}</Moment>
                  </span>
                  {/* <br /> */}
                  <p style={{fontSize:"17px"}}>{post.description}</p>

                  {post.ownerUser ? (
                    <div class="user-po">
                      {post.ownerUser._id != profile._id ? (
                        <>
                          <Link
                            onClick={() => getOneProfile(post.ownerUser._id)}
                            className="btn"
                            to={`/user/${post.ownerUser._id}`}
                          >
                            <img src={post.ownerUser.avatar} alt="" />
                            <div class="user-info-po">
                              <h6>
                                {post.ownerUser.firstName} {post.ownerUser.lastName}
                              </h6>
                            </div>
                          </Link>
                          {!user.includes(post.ownerUser._id) ? (
                            <button onClick={() => follow(post.ownerUser._id)} className="followw-btnn">
                              Follow
                            </button>
                          ) : (
                            <button onClick={() => follow(post.ownerUser._id)} className="unfolloww-btnn">
                              Unfollow
                            </button>
                          )}
                        </>
                      ) : (
                        <Link className="btn" to={`/profile`}>
                          <img src={post.ownerUser.avatar} alt="" />
                          <div class="user-info-po">
                            <h6>
                              {post.ownerUser.firstName} {post.ownerUser.lastName}
                            </h6>
                          </div>
                        </Link>
                      )}
                    </div>
                  ) : (
                    <div class="user-po">
                      <img src={post.ownerCompany.avatar} alt="" />
                      <div class="user-info-po">
                        <h6>{post.ownerCompany.companyName}</h6>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          ))}
          <br />
        </div>
      </section>
    </>
  )
}

export default Posts
