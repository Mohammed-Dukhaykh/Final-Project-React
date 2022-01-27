import { useContext } from "react"
import JobsContext from "../utils/JobsContext"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import NavbarItem from "../components/Navbar"

function ProfileJobsApply() {
    const {profile} = useContext(JobsContext)
    if (!profile) return null
    const Application = profile.JobsApply.map(applicationId => applicationId)
    if (Application) Application.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))

  return (
    <>
      <NavbarItem />
      <section>
      <Container>
        <Card style={{ marginTop: "40px" }}>
        {Application.map(job => (
          <Row style={{ margin: "30px" }}>
          
              <img src={job.jobId.poster} style={{ width: "400px", height: "350px", borderRadius: "10px" }} />
           
            <Col  md={7}  style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
              <h1>{job.jobId.title}</h1>
              <p>{job.jobId.description}</p>
              <h5>progress : {job.progress} </h5>
            </Col>
          </Row>
        ))}
        </Card>
      </Container>
      </section>
    </>
  )
}

export default ProfileJobsApply
