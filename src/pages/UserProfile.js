import { useContext } from "react"
import { useParams } from "react-router-dom"
import JobsContext from "../utils/JobsContext"
import { Button, Card, Col, Row } from "react-bootstrap"
import EducationCell from "../components/EducationCell"
import ExperienceCell from "../components/ExperienceCell"
import SkillsCell from "../components/SkillsCell"
import CertificatesCell from "../components/CeretificatesCell"
import InterestingCell from "../components/InterestingCell"
import NavbarItem from "../components/Navbar"

function UserProfile() {
  const { userId } = useParams()
  const { users } = useContext(JobsContext)
  if (!userId) return null
  const profile = users.find(user => user._id == userId)
  console.log(profile)

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
        <div style={{ textAlign: "center" }}>
          <h5>Following </h5>
          <p>{profile.followwnig.length}</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h5>Followers </h5>
          <p>{profile.followers.length}</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h5>Posts </h5>
          <p>{profile.posts.length}</p>
        </div>
      </div>

      <Card>
        <Card.Header style={{ textAlign: "center", backgroundColor: "#708090", color: "white" }}>
          <h3>Summary</h3>{" "}
        </Card.Header>

        <>
          <p style={{ textAlign: "center" }}>
            <strong>{profile.summary}</strong>
          </p>
        </>
      </Card>
      <Card>
        <Card.Header style={{ textAlign: "center", backgroundColor: "#708090", color: "white" }}>
          <h3>Education</h3>{" "}
        </Card.Header>
        {profile.Education.map(education => (
          <>
            <EducationCell education={education} key={education._id} />
          </>
        ))}
      </Card>
      <Card>
        <Card.Header style={{ textAlign: "center", backgroundColor: "#708090", color: "white" }}>
          <h3>Experience</h3>{" "}
        </Card.Header>
        {profile.Experience.map(experience => (
          <>
            <ExperienceCell experience={experience} key={experience._id} />
          </>
        ))}
      </Card>
      <Card>
        <Card.Header style={{ textAlign: "center", backgroundColor: "#708090", color: "white" }}>
          <h3>Skills</h3>{" "}
        </Card.Header>
        {profile.skills.map(skill => (
          <>
            <SkillsCell skill={skill} key={skill._id} />
          </>
        ))}
      </Card>
      <Card>
        <Card.Header style={{ textAlign: "center", backgroundColor: "#708090", color: "white" }}>
          <h3>Certificates</h3>{" "}
        </Card.Header>
        {profile.Certificates.map(Certificate => (
          <>
            <CertificatesCell Certificate={Certificate} key={Certificate._id} />
          </>
        ))}
      </Card>
      <Card>
        <Card.Header style={{ textAlign: "center", backgroundColor: "#708090", color: "white" }}>
          <h3>Interesting</h3>{" "}
        </Card.Header>
        {profile.interesting.map(interest => (
          <>
            <InterestingCell interest={interest} key={interest._id} />
          </>
        ))}
      </Card>
    </>
  )
}

export default UserProfile
