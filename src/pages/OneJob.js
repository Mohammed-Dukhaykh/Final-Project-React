import { useContext } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
import NavbarItem from "../components/Navbar"
import JobsContext from "../utils/JobsContext"
import "../OneJobStyle.css"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"
import CheckIcon from "@mui/icons-material/Check"
import Profile from "./Profile"
import { useState } from "react"
import ApplyJobModal from "../components/ApplyJobModal"
import ApplyJobModalHome from "../components/ApplyJobModal"

function OneJob() {
  const { jobId } = useParams()
  const [show, setShow] = useState(false)
  const { jobs, profile, jobFavourite } = useContext(JobsContext)
  if (!jobId || !profile) return null
  const jobFound = jobs.find(job => job._id == jobId)
  if (!jobFound) return null
  const profileFound = profile.jobInterest.find(job => job._id == jobFound._id)
  const applyFound = profile.JobsApply.find(applyId => applyId.jobId._id == jobFound._id)

  return (
    <>
      <section
        className="card-job"
        style={{ background: "linear-gradient(90deg, rgba(200,198,199,1), rgba(255,255,255,1));", minHeight: "100vh" }}
      >
        <NavbarItem />

        <Container>
          <Card style={{ marginTop: "40px" }}>
            <Row style={{marginBottom:"20px"}}>
              <img src={jobFound.poster} style={{ width: "400px", height: "350px", borderRadius: "10px" }} />

              <Col className="des-job" md={7}>
                <img
                  style={{ objectFit: "contain", margin: "20px" }}
                  width={60}
                  height={60}
                  src={jobFound.owner.avatar}
                  data-holder-rendered="true"
                  class="rounded-circle"
                />
                <h5>Job Title : </h5> <span>{jobFound.title}</span>
                <h5>Job Field : </h5> <span>{jobFound.jobField.name}</span>
                <h5>Job Description : </h5> <span>{jobFound.description}</span>
                <br />
                {!applyFound ? (
                  <button onClick={() => setShow(true)} class="btn-apply">
                    Apply
                  </button>
                ) : (
                  <button class="btn-apply">
                    You Already Apply <CheckIcon />{" "}
                  </button>
                )}
                {!profileFound ? (
                  <button onClick={() => jobFavourite(jobFound._id)} class="btn-apply">
                    Add Job <AddCircleIcon />
                  </button>
                ) : (
                  <button onClick={() => jobFavourite(jobFound._id)} class="btn-apply">
                    Remove Job <RemoveCircleIcon />
                  </button>
                )}
              </Col>
            </Row>
          </Card>
        </Container>
        <ApplyJobModalHome show={show} setShow={setShow} job={jobFound} />
      </section>
    </>
  )
}

export default OneJob
