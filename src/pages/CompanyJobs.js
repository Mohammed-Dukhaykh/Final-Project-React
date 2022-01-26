import { useContext } from "react"
import JobsContext from "../utils/JobsContext"
import { Box } from "@mui/material"
import { ToastContainer } from "react-toastify"
import { CssBaseline } from "@mui/material"
import Sidebar from "../components/Sidebar"
import { Table } from "react-bootstrap"
import HRcell from "../components/HRcell"
import EmployeeUserCell from "../components/EmployeeUserCell"
import CompanyJobsCell from "../components/CompanyJobsCell"

function CompanyJobs() {
  const { company, profile } = useContext(JobsContext)
  if (!profile) return null
  let myCompany = company.find(oneCompany => oneCompany._id === profile.Work._id)
  let companyJob
  if (myCompany) companyJob = myCompany.jobs.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
  //    myCompany.jobs.sort((a, b) => b.dateCreated - a.dateCreated)
  return (
    <>
      {" "}
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <h1 style={{ marginTop: 10 }}>Company Jobs</h1>
          <hr />
          <Table bordered hover style={{ tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th style={{ width: "9%" }}>Id</th>
                <th style={{ width: "18%" }}>Title</th>
                <th style={{ width: "40%" }}>Description</th>
                <th style={{ width: "24%" }}>Poster</th>
                <th style={{ width: "14%" }}>Employee Add Job</th>
                <th style={{ width: "30%" }}>Actions</th>
              </tr>
            </thead>
            {myCompany.jobs ? (
              <tbody>
                {companyJob.map(job => (
                  <>
                    <CompanyJobsCell jobId={job} job={job} key={job._id} />
                  </>
                ))}
              </tbody>
            ) : null}
          </Table>
          <hr />
        </Box>
      </Box>
    </>
  )
}

export default CompanyJobs
