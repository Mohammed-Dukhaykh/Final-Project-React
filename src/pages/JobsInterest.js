import { useContext } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import NavbarItem from "../components/Navbar"
import JobsContext from "../utils/JobsContext"
import AddIcon from "@mui/icons-material/Add"
import AddTaskIcon from "@mui/icons-material/AddTask"
import RemoveIcon from "@mui/icons-material/Remove"

function JobsInterest() {
  const { profile, jobFavourite } = useContext(JobsContext)
  if (!profile) return null
  let favourite
  favourite = profile.JobsApply.map(job => job.jobId._id)

  return (
    // <Card>
    //   <Card.Header>Quote</Card.Header>
    //   <Card.Body>
    //     <blockquote className="blockquote mb-0">
    //       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. </p>
    //       <footer className="blockquote-footer">
    //         Someone famous in <cite title="Source Title">Source Title</cite>
    //       </footer>
    //     </blockquote>
    //   </Card.Body>
    // </Card>
    <>
      <NavbarItem />
      <Container>
        {profile.jobInterest.map(job => (
          <Row style={{ margin: "30px" }}>
            <Col>
              <img src={job.poster} class="img-fluid rounded mb-4 mb-lg-0" />
            </Col>
            <Col style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
              <h1>{job.title}</h1>
              <p>{job.description}</p>
              {!favourite.includes(job._id) ? <Button variant="success">Submit</Button> : null}
            </Col>

            <Col>
              <Button onClick={() => jobFavourite(job._id)} variant="light">
                <RemoveIcon />
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
}

export default JobsInterest
