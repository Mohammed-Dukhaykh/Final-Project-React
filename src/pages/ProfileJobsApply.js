import { useContext } from "react"
import JobsContext from "../utils/JobsContext"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import NavbarItem from "../components/Navbar"

function ProfileJobsApply() {
    const {profile} = useContext(JobsContext)
    if (!profile) return null

  return (
    <>
      <NavbarItem />
      <Container>
        {profile.JobsApply.map(job => (
          <Row style={{ margin: "30px" }}>
            <Col>
              <img src={job.jobId.poster} class="img-fluid rounded mb-4 mb-lg-0" />
            </Col>
            <Col style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
              <h1>{job.jobId.title}</h1>
              <p>{job.jobId.description}</p>
              <h5>progress : {job.progress} </h5>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
}

export default ProfileJobsApply
