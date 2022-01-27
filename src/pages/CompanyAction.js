import { Card, Col, Row } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import Sidebar from "../components/Sidebar"
import PeopleIcon from "@mui/icons-material/People"
import WorkIcon from "@mui/icons-material/Work"
import LeaderboardIcon from "@mui/icons-material/Leaderboard"
import PhotoIcon from "@mui/icons-material/Photo"
import ApartmentIcon from "@mui/icons-material/Apartment"
import { Box } from "@mui/material"
import { ToastContainer } from "react-toastify"
import { CssBaseline } from "@mui/material"
import { useContext } from "react"
import JobsContext from "../utils/JobsContext"
function CompanyAction() {
  const { company, profile } = useContext(JobsContext)
  if (!profile) return null

  const myCompany = company.find(oneCompany => oneCompany._id === profile.Work._id)
  return (
    <>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <br />
          <h1>Dashboard Site</h1>
          <hr />
          <Row>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "19px",
                marginBottom: "25px",
                justifyContent: "center",
              }}
            >
              <h2 style={{ fontSize: "40px" }}>Site Statistics</h2>
              <LeaderboardIcon sx={{ fontSize: 70 }} />
            </div>
            <Col md={6}>
              <Card style={{ backgroundColor: "white" }}>
                <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
                  <div style={{ fontSize: "29px" }}>
                    <center>
                      <Card.Title>Company Employees</Card.Title>
                      <Card.Text>{myCompany.HR.length + myCompany.Users.length}</Card.Text>
                    </center>
                  </div>
                  <PeopleIcon sx={{ fontSize: 70 }} />
                </Card.Body>
                <CardHeader style={{ backgroundColor: "black" }}>
                  <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>Users</Card.Text>
                </CardHeader>
              </Card>
            </Col>

            <Col md={6}>
              <Card style={{ backgroundColor: "white" }}>
                <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
                  <div style={{ fontSize: "29px" }}>
                    <center>
                      <Card.Title>Company Jobs</Card.Title>
                      <Card.Text>{myCompany.jobs.length}</Card.Text>
                    </center>
                  </div>
                  <WorkIcon sx={{ fontSize: 70 }} />
                </Card.Body>
                <CardHeader style={{ backgroundColor: "black" }}>
                  <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>Company</Card.Text>
                </CardHeader>
              </Card>
            </Col>
            <Col md={12}>
              <Card style={{ backgroundColor: "white", color: "black" }}>
                <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
                  <div style={{ fontSize: "29px" }}>
                    <center>
                      <PhotoIcon sx={{ fontSize: 70 }} />
                      <Card.Title style={{fontSize:"30px"}}>Company Posts</Card.Title>
                      <Card.Text>{myCompany.posts.length}</Card.Text>
                    </center>
                  </div>
                </Card.Body>
                <CardHeader style={{ backgroundColor: "black" }}>
                  <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>Posts</Card.Text>
                </CardHeader>
              </Card>
            </Col>
            
          </Row>
        </Box>
      </Box>
    </>
  )
}

export default CompanyAction
