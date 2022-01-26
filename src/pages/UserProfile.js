import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import JobsContext from "../utils/JobsContext"
import { Button, Card, Col, Row } from "react-bootstrap"
import EducationCell from "../components/EducationCell"
import ExperienceCell from "../components/ExperienceCell"
import SkillsCell from "../components/SkillsCell"
import CertificatesCell from "../components/CeretificatesCell"
import InterestingCell from "../components/InterestingCell"
import NavbarItem from "../components/Navbar"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import PersonRemoveIcon from "@mui/icons-material/PersonRemove"
import Profile from "./Profile"
import "../ProfileStyle.css"
import EducationUserCell from "../components/EducationUserCell"
import SkillUserCell from "../components/SkillUserCell"
import CertificatesUserCell from "../components/CertificatesUserCell"
import InterestingUserCell from "../components/InterestingUserCell"
import ExperienceUserCell from "../components/ExperienceUserCell"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt"
function UserProfile() {
  const { userId } = useParams()
  const { users, follow, profile } = useContext(JobsContext)
  if (!userId || !profile) return null
  const profileObject = users.find(user => user._id == userId)
  const userFound = profile.followwnig.find(followObject => followObject._id == profileObject._id)
  if (!profileObject) return null

  return (
    <>
      <NavbarItem />
      <section class="h-100 gradient-custom-2 m-5" style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {" "}
          <img
            style={{ objectFit: "contain", margin: "20px" }}
            width={300}
            height={250}
            src={profileObject.avatar}
            data-holder-rendered="true"
          />
          {!userFound ? (
            <button
              onClick={() => follow(profileObject._id)}
              className="userFollow"
              // style={{ position: "absolute", right: "88px", top: "150px" }}
            >
              {" "}
              FOLLOW{" "}
            </button>
          ) : (
            <button
              onClick={() => follow(profileObject._id)}
              className="userFollow"
              // style={{ position: "absolute", right: "88px", top: "150px" }}
            >
              {" "}
              UNFOLLOW
            </button>
          )}
          {/* <button className="userFollow" style={{position:"absolute" , right:"88px" , top:"150px" }}> FOLLOW <AddCircleIcon /></button> */}
        </div>
        <div style={{ marginLeft: "150px" }}>
          <center>
            <div>
              <h2 style={{ letterSpacing: "3px" }}>
                <strong>
                  {profileObject.firstName} {profileObject.lastName}{" "}
                </strong>
              </h2>
              <p style={{ width: "300px" }}>{profileObject.summary}</p>
              {profileObject.Work ? (
                <>
                  <h6 style={{ display: "inline" }}>Work on </h6>
                  <img
                    style={{ objectFit: "contain", margin: "20px" }}
                    width={50}
                    height={50}
                    src={profileObject.Work.avatar}
                    data-holder-rendered="true"
                    class="rounded-circle"
                  />

                  <span>
                    <strong>{profileObject.Work.companyName}</strong>
                  </span>
                </>
              ) : null}
            </div>

            <div>
              {" "}
              <Link className="btn" to={`/following/${profileObject._id}`}>
                <div style={{ marginTop: "30px" }}>
                  <h5>Following </h5>
                  <p>{profileObject.followwnig.length}</p>
                </div>
              </Link>
              <Link className="btn" to={`/followers/${profileObject._id}`}>
                <div style={{ marginTop: "30px" }}>
                  <h5>Followers </h5>
                  <p>{profileObject.followers.length}</p>
                </div>
              </Link>
            </div>
            {profileObject.Resume ? (
              <div className="img-resume">
                <a href={profileObject.Resume} target="_blank">
                  {" "}
                  <img
                    src="https://scontent.fmed1-1.fna.fbcdn.net/v/t39.30808-6/272127238_2146471475505744_5581813376169249917_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=DqVdYSNJhhIAX8-htfD&_nc_ht=scontent.fmed1-1.fna&oh=00_AT9Z3njWAiFtBzbfonsYM6HI-xzDMnPI51qflZ0rEf9B3A&oe=61F32BEA"
                    alt=""
                    height="70px"
                    width="60px"
                  />
                </a>
              </div>
            ) : null}

            <br />
            <hr />
            <div>
              <h3>About Me</h3>
              <p>{profileObject.summary}</p>
            </div>
            <br />
            <hr />
            <div>
              <h3>Education</h3>
              <br />
              {profileObject.Education.map(education => (
                <EducationUserCell educationItem={education} key={education._id} />
              ))}
            </div>

            <br />
            <hr />
            <div>
              <h3>Experience</h3>
              <br />
              {profileObject.Experience.map(experience => (
                <>
                  <ExperienceUserCell experience={experience} key={experience._id} />
                </>
              ))}
            </div>
            <br />
            <hr />
            <h3>Skills</h3>
            <hr />
            {profileObject.skills.map(skill => (
              <>
                <SkillUserCell skill={skill} key={skill._id} />
              </>
            ))}
            <br />
            <hr />
            <div>
              <h3>Certificates</h3>
              <hr />
              {profileObject.Certificates.map(Certificate => (
                <>
                  <CertificatesUserCell Certificate={Certificate} key={Certificate._id} />
                </>
              ))}
            </div>
            <hr />
            <br />
            <div>
              <h3>Interestings</h3>

              <hr />
              {profileObject.interesting.map(interest => (
                <>
                  <InterestingUserCell interest={interest} key={interest._id} />
                </>
              ))}
            </div>
          </center>
        </div>
      </section>
      <section
        class="h-100 gradient-custom-2 m-5"
        style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <center>
          <h3>Posts</h3>
          <br />
          <hr />
        </center>
        <div style={{ display: "flex" }}>
          {profileObject.posts.map(post => (
            <>
              <Card style={{ width: "20rem", margin: "20px", borderRadius: "10px" }}>
                <Card.Img variant="top" src={post.photo} style={{ height: "300px" }} />
                <Card.Body>
                  <MarkUnreadChatAltIcon fontSize="20px" />
                  <span> {post.description}</span>
                </Card.Body>
              </Card>
            </>
          ))}
        </div>
      </section>
    </>
  )
}

export default UserProfile
