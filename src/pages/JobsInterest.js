import { useContext } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import NavbarItem from "../components/Navbar"
import JobsContext from "../utils/JobsContext"
import AddIcon from "@mui/icons-material/Add"
import AddTaskIcon from "@mui/icons-material/AddTask"
import RemoveIcon from "@mui/icons-material/Remove"
import "../JobsStyle.css"
import { Link } from "react-router-dom"

function JobsInterest() {
  const { profile, jobFavourite } = useContext(JobsContext)
  if (!profile) return null
  let favourite
  favourite = profile.JobsApply.map(job => job.jobId._id)
  return (
  
    <>
      <NavbarItem />
      {/* <Container>
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
      </Container> */}
       {profile.jobInterest.map(job => (
        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-10 offset-md-1">
                <ul class="job-list">
                  <li class="job-preview">
                    <div class="content float-left">
                      <h4 class="job-title">{job.title}</h4>
                      <h5 class="company">{job.owner.companyName}</h5>
                      <p>{job.description}</p>
                    </div>
                    <Link to={`/job/${job._id}`} className="btn btn-apply float-sm-right float-xs-left">
                      Show Details
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default JobsInterest
