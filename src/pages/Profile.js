import { useContext } from "react"
import { Button, Card, Col, Row, DropdownButton, Dropdown } from "react-bootstrap"
import NavbarItem from "../components/Navbar"
import JobsContext from "../utils/JobsContext"
import AddIcon from "@mui/icons-material/Add"
import Moment from "react-moment"
import { useState } from "react"
import AddEducationModel from "../components/AddEducationModel"
import EditEducationModel from "../components/EditEducationModel"
import EducationCell from "../components/EducationCell"
import ExperienceCell from "../components/ExperienceCell"
import AddExperienceModel from "../components/AddExperienceModel"
import SkillsCell from "../components/SkillsCell"
import AddSkillsModel from "../components/AddSkillsModel"
import CertificatesCell from "../components/CeretificatesCell"
import AddCertificatesModel from "../components/AddCertificatesModel"
import InterestingCell from "../components/InterestingCell"
import AddInterestModel from "../components/AddInterestModel"
import AddSummaryModel from "../components/AddSummary"
import EditIcon from "@mui/icons-material/Edit"
import EditSummaryModel from "../components/EditSummaryModel"
import "../ProfileStyle.css"
import { Link } from "react-router-dom"
import ProfilePostCell from "../components/ProfilePostCell"
import EditProfileModal from "../components/EditProfileModal"
// import "../ProfileStyle.css"
function Profile() {
  const { profile, addResume } = useContext(JobsContext)

  const [show, setShow] = useState(false)
  const [experienceShow, setExperienceShow] = useState(false)
  const [skillsShow, setSkillsShow] = useState(false)
  const [certificatesShow, setCertificatesShow] = useState(false)
  const [interestShow, setInterestShow] = useState(false)
  const [summaryShow, setSummaryShow] = useState(false)
  const [summaryEditShow, setEditSummaryShow] = useState(false)
  const [userProfileShow, setProfileShow] = useState(false)
  if (!profile) return null

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
            src={profile.avatar}
            data-holder-rendered="true"
          />
          <button
            style={{
              borderRadius: "7px",
              border: "none",
              width: "100px",
              padding: "8px",
              marginLeft: "120px",
              backgroundColor: "white",
            }}
            onClick={() => setProfileShow(true)}
          >
            Edit Profile
          </button>
          <EditProfileModal show={userProfileShow} setShow={setProfileShow} profile={profile} />
        </div>
        <center>
          <div style={{ marginLeft: "20px" }}>
            <h2 style={{ letterSpacing: "3px" }}>
              <strong>
                {profile.firstName} {profile.lastName}{" "}
              </strong>
            </h2>
            <p style={{ width: "300px" }}>{profile.summary}</p>
            {profile.Work ? (
              <>
                <h6 style={{ display: "inline" }}>Work on </h6>
                <img
                  style={{ objectFit: "contain", margin: "20px" }}
                  width={50}
                  height={50}
                  src={profile.Work.avatar}
                  data-holder-rendered="true"
                  class="rounded-circle"
                />

                <span>
                  <strong>{profile.Work.companyName}</strong>
                </span>
              </>
            ) : null}
            {!profile.Resume ? (
              <div>
                <form onSubmit={addResume}>
                  <input className="resume-upload" type="file" accept="application/pdf" name="resume" />
                  <button type="submit" style={{ cursor: "pointer", display: "inline", border: "none", width: "90px" }}>
                    Add
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <form onSubmit={addResume}>
                  <input className="resume-upload-edit" type="file" accept="application/pdf" name="resume" />
                  <button type="submit" style={{ cursor: "pointer", display: "inline", border: "none", width: "90px" }}>
                    Confirm
                  </button>
                </form>
                <br />
                <div className="img-resume">
                  <a href={profile.Resume} target="_blank">
                    {" "}
                    <img
                      src="https://scontent.fruh4-1.fna.fbcdn.net/v/t39.30808-6/272127238_2146471475505744_5581813376169249917_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=oxnFwE5RFiAAX_Iplcn&_nc_ht=scontent.fruh4-1.fna&oh=00_AT_sVnDmimr70tNg2MG7m-qsORfDOOpU0deNA6NdAWR_Sg&oe=62EC576A"
                      alt=""
                      height="70px"
                      width="60px"
                    />
                  </a>
                </div>
              </div>
            )}
          </div>
          <div>
            {" "}
            <Link className="btn" to="/following">
              <div style={{ marginTop: "30px" }}>
                <h5>Following </h5>
                <p>{profile.followwnig.length}</p>
              </div>
            </Link>
            <Link className="btn" to="/followers">
              <div style={{ marginTop: "30px" }}>
                <h5>Followers </h5>
                <p>{profile.followers.length}</p>
              </div>
            </Link>
            <Link className="btn" to="/profileWatch">
              <div style={{ marginTop: "30px" }}>
                <h5>Profile Watch </h5>
                <p>{profile.profileWatch.length}</p>
              </div>
            </Link>
            <Link className="btn" to="/jobInterest">
              <div style={{ marginTop: "30px" }}>
                <h5>Jobs Interest </h5>
                <p>{profile.jobInterest.length}</p>
              </div>
            </Link>
            <Link className="btn" to="/jobsApply">
              <div style={{ marginTop: "30px" }}>
                <h5>Jobs Apply </h5>
                <p>{profile.JobsApply.length}</p>
              </div>
            </Link>
          </div>
          <br />
          <hr />
          <div>
            <h3>About Me</h3>
            <p>{profile.summary}</p>
            {!profile.summary ? (
              <Button onClick={() => setSummaryShow(true)} variant="light">
                <span>
                  <AddIcon fontSize="20" />
                </span>
              </Button>
            ) : (
              <Button onClick={() => setEditSummaryShow(true)} variant="light">
                <span>
                  <EditIcon fontSize="10px" />
                </span>
              </Button>
            )}
          </div>
          <AddSummaryModel show={summaryShow} setShow={setSummaryShow} />
          <EditSummaryModel show={summaryEditShow} setShow={setEditSummaryShow} summaryProfile={profile.summary} />
          <br />
          <hr />
          <div>
            <h3>Education</h3>
            <Button onClick={() => setShow(true)} variant="light">
              <span>
                <AddIcon fontSize="10px" />
              </span>
            </Button>
            <br />
            {profile.Education.map(education => (
              <EducationCell educationItem={education} />
            ))}
          </div>

          <AddEducationModel show={show} setShow={setShow} />
          <br />
          <hr />
          <div>
            <h3>Experience</h3>
            <Button onClick={() => setExperienceShow(true)} variant="light">
              <span>
                <AddIcon fontSize="10px" />
              </span>
            </Button>
            <br />
            {profile.Experience.map(experience => (
              <>
                <ExperienceCell experience={experience} key={experience._id} />
              </>
            ))}
          </div>
          <AddExperienceModel show={experienceShow} setShow={setExperienceShow} />
          <br />
          <hr />
          <h3>Skills</h3>
          <Button onClick={() => setSkillsShow(true)} variant="light">
            <span>
              <AddIcon fontSize="10px" />
            </span>
          </Button>
          <hr />
          {profile.skills.map(skill => (
            <>
              <SkillsCell skill={skill} key={skill._id} />
            </>
          ))}

          <AddSkillsModel show={skillsShow} setShow={setSkillsShow} />
          <br />
          <hr />
          <div>
            <h3>Certificates</h3>
            <Button onClick={() => setCertificatesShow(true)} variant="light">
              <span>
                <AddIcon fontSize="10px" />
              </span>
            </Button>
            <hr />
            {profile.Certificates.map(Certificate => (
              <>
                <CertificatesCell Certificate={Certificate} key={Certificate._id} />
              </>
            ))}
            <AddCertificatesModel show={certificatesShow} setShow={setCertificatesShow} />
          </div>
          <hr />
          <br />
          <div>
            <h3>Interestings</h3>

            <Button onClick={() => setInterestShow(true)} variant="light">
              <span>
                <AddIcon fontSize="10px" />
              </span>
            </Button>
            <hr />
            {profile.interesting.map(interest => (
              <>
                <InterestingCell interest={interest} key={interest._id} />
              </>
            ))}
            <AddInterestModel show={interestShow} setShow={setInterestShow} />
          </div>
        </center>
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
          {profile.posts.map(post => (
            <>
              <ProfilePostCell post={post} key={post._id} />
            </>
          ))}
        </div>
      </section>
    </>
  )
}

export default Profile
