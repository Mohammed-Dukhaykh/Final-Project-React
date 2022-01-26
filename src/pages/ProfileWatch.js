import { useContext } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import NavbarItem from "../components/Navbar"
import JobsContext from "../utils/JobsContext"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import PersonRemoveIcon from "@mui/icons-material/PersonRemove"
import { Link } from "react-router-dom"
import Moment from "react-moment"
function ProfileWatch() {
  const { profile, follow } = useContext(JobsContext)
  if (!profile) return null
  const followFound = profile.followwnig.map(followId => followId._id)
  let profileFound = profile.profileWatch.map(watch => watch)
  if (profileFound) profileFound.sort((a, b) => new Date(b.date) - new Date(a.date))
  return (
    <>
      <NavbarItem />
      <div class="div-follow">
        {profileFound.map(followObject => (
          <figure class="snip1336">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
            <figcaption>
              <img src={followObject.visitor.avatar} alt="profile-sample4" class="profile" />
              <h2>
                {followObject.visitor.firstName} {followObject.visitor.lastName}
              </h2>
              <p>{followObject.summary}</p>
              {followFound.includes(followObject.visitor._id) ? (
                <button class="follow" onClick={() => follow(followObject.visitor._id)}>
                  <h6>unfollow</h6>
                </button>
              ) : (
                <button class="follow" onClick={() => follow(followObject.visitor._id)}>
                  <h6>follow</h6>
                </button>
              )}

              <Link style={{ border: "none" }} className="nav-link" to={`/user/${followObject.visitor._id}`}>
                <button class="info">
                  <h6>Profile</h6>
                </button>
              </Link>
            </figcaption>
            <p style={{ textAlign: "center", marginBottom: "20px" }}>
              (<Moment format=" H:mm   , MM/DD   ">{followObject.date}</Moment>)
            </p>
          </figure>
        ))}
      </div>
    </>
  )
}

export default ProfileWatch
