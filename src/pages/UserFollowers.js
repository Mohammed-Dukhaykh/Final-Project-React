import { useContext } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import NavbarItem from "../components/Navbar"
import JobsContext from "../utils/JobsContext"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import PersonRemoveIcon from "@mui/icons-material/PersonRemove"
import { Link, useParams } from "react-router-dom"
import "../FollowStyle.css"
function UserFollowers() {
  const { userFollowers } = useParams()
  const { profile, users, follow } = useContext(JobsContext)
  if (!userFollowers || !profile) return <h1>lo</h1>
  const userFound = users.find(user => user._id == userFollowers)
  return (
    <>
      {" "}
      <NavbarItem />
      <div class="div-follow">
        {userFound.followers.map(followObject => (
          <figure class="snip1336">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
            <figcaption>
              <img src={followObject.avatar} alt="profile-sample4" class="profile" />
              <h2>
                {followObject.firstName} {followObject.lastName}
              </h2>
              <p>{followObject.summary}</p>
              {followObject._id != profile._id ? (
                <>
                  {" "}
                  {profile.followwnig.find(objectId => objectId._id == followObject._id) ? (
                    <button class="follow" onClick={() => follow(followObject._id)}>
                      <h6>Unfollow</h6>
                    </button>
                  ) : (
                    <button class="follow" onClick={() => follow(followObject._id)}>
                      <h6>Follow</h6>
                    </button>
                  )}
                  <Link style={{ border: "none" }} className="nav-link" to={`/user/${followObject._id}`}>
                    <button class="info">
                      <h6>Profile</h6>
                    </button>
                  </Link>
                </>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}

export default UserFollowers
