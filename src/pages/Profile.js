import { useContext } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import "../App.css"
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
import { display } from "@mui/system"
import { Link } from "react-router-dom"
function Profile() {
  const { profile } = useContext(JobsContext)
  const [show, setShow] = useState(false)
  const [experienceShow, setExperienceShow] = useState(false)
  const [skillsShow, setSkillsShow] = useState(false)
  const [certificatesShow, setCertificatesShow] = useState(false)
  const [interestShow, setInterestShow] = useState(false)
  const [summaryShow, setSummaryShow] = useState(false)
  const [summaryEditShow, setEditSummaryShow] = useState(false)

  if (!profile) return <h1>Loading ...</h1>
  return (
    <>
      <NavbarItem />
      <div style={{ display: "flex", justifyContent: "center", gap: "50px", backgroundColor: "" }}>
        <div>
          <img
            style={{ objectFit: "contain", margin: "20px" }}
            width={300}
            height={250}
            src={profile.avatar}
            data-holder-rendered="true"
          />
        </div>
        <div style={{ margin: "20px" }}>
          <h3>
            {profile.firstName} {profile.lastName}
          </h3>
          <p>{profile.email}</p>

          {profile.Work ? (
            <>
              <h3 style={{ display: "inline" }}>Work :</h3>
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
        </div>

        <hr />
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
        <Link className="btn" to="/following">
          <div style={{ textAlign: "center" }}>
            <h5>Following </h5>
            <p>{profile.followwnig.length}</p>
          </div>
        </Link>
        <Link className="btn" to="/followers">
          <div style={{ textAlign: "center" }}>
            <h5>Followers </h5>
            <p>{profile.followers.length}</p>
          </div>
        </Link>
        <Link className="btn" to="/profileWatch">
          <div style={{ textAlign: "center" }}>
            <h5>Profile Watch </h5>
            <p>{profile.profileWatch.length}</p>
          </div>
        </Link>
        <Link className="btn" to="/jobInterest">
          <div style={{ textAlign: "center" }}>
            <h5>Jobs Interest </h5>
            <p>{profile.jobInterest.length}</p>
          </div>
        </Link>
        <Link className="btn" to="/jobsApply">
          <div style={{ textAlign: "center" }}>
            <h5>Jobs Apply </h5>
            <p>{profile.JobsApply.length}</p>
          </div>
        </Link>
        <Link className="btn" to="/profilePosts">
          <div style={{ textAlign: "center" }}>
            <h5>Posts </h5>
            <p>{profile.posts.length}</p>
          </div>
        </Link>
      </div>

      <Card>
        <Card.Header style={{ textAlign: "center", backgroundColor: "#708090", color: "white" }}>
          <h3>Summary</h3>{" "}
          {!profile.summary ? (
            <Button onClick={() => setSummaryShow(true)} variant="light">
              <span>
                <AddIcon />
              </span>
            </Button>
          ) : (
            <Button onClick={() => setEditSummaryShow(true)} variant="light">
              <span>
                <EditIcon />
              </span>
            </Button>
          )}
        </Card.Header>

        <>
          <p style={{ textAlign: "center" }}>
            <strong>{profile.summary}</strong>
          </p>
        </>
      </Card>
      <AddSummaryModel show={summaryShow} setShow={setSummaryShow} />
      <EditSummaryModel show={summaryEditShow} setShow={setEditSummaryShow} summaryProfile={profile.summary} />
      <Card>
        <Card.Header style={{ textAlign: "center", backgroundColor: "#708090", color: "white" }}>
          <h3>Education</h3>{" "}
          <Button onClick={() => setShow(true)} variant="light">
            <span>
              <AddIcon />
            </span>
          </Button>
        </Card.Header>
        {profile.Education.map(education => (
          <>
            <EducationCell education={education} key={education._id} />
          </>
        ))}
      </Card>
      <AddEducationModel show={show} setShow={setShow} />
      <Card>
        <Card.Header style={{ textAlign: "center", backgroundColor: "#708090", color: "white" }}>
          <h3>Experience</h3>{" "}
          <Button onClick={() => setExperienceShow(true)} variant="light">
            <span>
              <AddIcon />
            </span>
          </Button>
        </Card.Header>
        {profile.Experience.map(experience => (
          <>
            <ExperienceCell experience={experience} key={experience._id} />
          </>
        ))}
      </Card>
      <AddExperienceModel show={experienceShow} setShow={setExperienceShow} />
      <Card>
        <Card.Header style={{ textAlign: "center", backgroundColor: "#708090", color: "white" }}>
          <h3>Skills</h3>{" "}
          <Button onClick={() => setSkillsShow(true)} variant="light">
            <span>
              <AddIcon />
            </span>
          </Button>
        </Card.Header>
        {profile.skills.map(skill => (
          <>
            <SkillsCell skill={skill} key={skill._id} />
          </>
        ))}
      </Card>
      <AddSkillsModel show={skillsShow} setShow={setSkillsShow} />
      <Card>
        <Card.Header style={{ textAlign: "center", backgroundColor: "#708090", color: "white" }}>
          <h3>Certificates</h3>{" "}
          <Button onClick={() => setCertificatesShow(true)} variant="light">
            <span>
              <AddIcon />
            </span>
          </Button>
        </Card.Header>
        {profile.Certificates.map(Certificate => (
          <>
            <CertificatesCell Certificate={Certificate} key={Certificate._id} />
          </>
        ))}
        <AddCertificatesModel show={certificatesShow} setShow={setCertificatesShow} />
      </Card>
      <Card>
        <Card.Header style={{ textAlign: "center", backgroundColor: "#708090", color: "white" }}>
          <h3>Interesting</h3>{" "}
          <Button onClick={() => setInterestShow(true)} variant="light">
            <span>
              <AddIcon />
            </span>
          </Button>
        </Card.Header>
        {profile.interesting.map(interest => (
          <>
            <InterestingCell interest={interest} key={interest._id} />
          </>
        ))}
      </Card>
      <AddInterestModel show={interestShow} setShow={setInterestShow} />
    </>
  )
}

export default Profile
