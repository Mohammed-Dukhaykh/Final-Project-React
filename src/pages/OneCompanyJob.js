import { useContext, useState } from "react"
import { Button, Col, Container, Row, Table } from "react-bootstrap"
import { useParams } from "react-router-dom"
import NavbarItem from "../components/Navbar"
import UsersAccept from "../components/UsersAccept"
import UsersApplyCell from "../components/UsersApplyCell"
import JobsContext from "../utils/JobsContext"
import { Box } from "@mui/material"
import { ToastContainer } from "react-toastify"
import { CssBaseline } from "@mui/material"
import Sidebar from "../components/Sidebar"
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Add } from "@mui/icons-material"
import AddQuestionModel from "../components/AddQuestionModel"

function OneCompanyJob() {
  const { jobs } = useContext(JobsContext)
  const { companyJob } = useParams()
  const [show , setShow] = useState(false)
  const job = jobs.find(job => job._id == companyJob)
  if (!job) return <h1>Loading ...</h1>
  
  return (
    <>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Container>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                style={{ marginRight: 40, marginBottom: 10, display: "flex" }}
                variant="outline-primary"
                onClick={() => setShow(true)}
              >
                <span style={{ marginRight: 7 }}>Add Question</span> <ContactSupportIcon />
              </Button>
            </div>
            <Row className="mt-5">
              <Col>
                <img src={job.poster} class="img-fluid rounded mb-4 mb-lg-0" />
              </Col>
              <Col style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                <h1>{job.title}</h1>
                <p>{job.description}</p>
              </Col>
            </Row>
            <hr />
            <div style={{position:"relative" , left:"33%"}}>
            <h2 style={{ marginTop: 10 }}>Job Qustions :</h2>
            <ul>
                {job.questions.map(question => (
                    <li>{question.question}</li>
                ))}
            </ul>
            </div>
            <hr />
            <h3 style={{ position: "relative", left: "36%", marginBottom: "15px" }}>Users Apply</h3>
            <Table style={{ width: "50%", position: "relative", left: "20%" }} striped bordered hover size="sm">
              <thead>
                <tr>
                  <th style={{ width: "20%" }}>Full Name</th>
                  <th style={{ width: "18%" }}>Avatar</th>
                  <th style={{ width: "18%" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {job.usersApply.map(user => (
                  <>
                    <UsersApplyCell user={user} key={user._id} />
                  </>
                ))}
              </tbody>
            </Table>
            <hr />
            <h3 style={{ position: "relative", left: "36%", marginBottom: "15px" }}>Users Accept</h3>
            <Table style={{ width: "50%", position: "relative", left: "20%" }} striped bordered hover size="sm">
              <thead>
                <tr>
                  <th style={{ width: "20%" }}>Full Name</th>
                  <th style={{ width: "18%" }}>Avatar</th>
                  <th style={{ width: "18%" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {job.usersApply.map(user => (
                  <>
                    <UsersAccept user={user} key={user._id} />
                  </>
                ))}
              </tbody>
            </Table>
            <AddQuestionModel show={show} setShow={setShow} job={job} />
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default OneCompanyJob
