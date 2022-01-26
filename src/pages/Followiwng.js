import { useContext } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import NavbarItem from "../components/Navbar"
import JobsContext from "../utils/JobsContext"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import PersonRemoveIcon from "@mui/icons-material/PersonRemove"
import { Link } from "react-router-dom"
import "../FollowStyle.css"
import { fontSize } from "@mui/system"

function Followwing(props) {
  const { profile, follow } = useContext(JobsContext)
  if (!profile) return null
  return (
    <>
      <NavbarItem />
      <div class="div-follow">
        {profile.followwnig.map(followObject => (
          <figure class="snip1336">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
            <figcaption>
              <img src={followObject.avatar} alt="profile-sample4" class="profile" />
              <h2>
                {followObject.firstName} {followObject.lastName}
              </h2>
              <p>{followObject.summary}</p>
              <button class="follow" onClick={() => follow(followObject._id)}>
                <h6>Unfollow</h6>
              </button>
              <Link style={{ border: "none" }} className="nav-link" to={`/user/${followObject._id}`}>
                <button class="info">
                  <h6>Profile</h6>
                </button>
              </Link>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}

export default Followwing
