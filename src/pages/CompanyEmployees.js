import { useContext } from "react"
import JobsContext from "../utils/JobsContext"
import { Box } from "@mui/material"
import { ToastContainer } from "react-toastify"
import { CssBaseline } from "@mui/material"
import Sidebar from "../components/Sidebar"
import { Table } from "react-bootstrap"
import UsersCell from "../components/UsersCell"
import HRcell from "../components/HRcell"
import EmployeeUserCell from "../components/EmployeeUserCell"

function CompanyEmployees(props) {
  const { company, profile } = useContext(JobsContext)
  if (!profile) return null
  const myCompany = company.find(oneCompany => oneCompany._id === profile.Work._id)
  console.log(myCompany)
  return (
    <>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <h1 style={{ marginTop: 10 }}>Company Employees</h1>
          <hr />
          <h1 style={{ marginTop: 20 , marginBottom: 10 }}>HR Employees</h1>
          <Table bordered hover style={{ tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th style={{ width: "9%" }}>Id</th>
                <th style={{ width: "18%" }}>Full Name</th>
                <th style={{ width: "24%" }}>Email</th>
                <th style={{ width: "14%" }}>Avatar</th>
                <th style={{ width: "40%" }}>Actions</th>
              </tr>
            </thead>
           
            <tbody>
              {myCompany.HR.map(employee => (
                <>
                  <HRcell user={employee} key={employee._id} />
                </>
              ))}
            </tbody>
          </Table>
          <hr />
          <h1 style={{ marginTop: 20 , marginBottom: 10 }}>Users Employees</h1>
          <Table bordered hover style={{ tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th style={{ width: "9%" }}>Id</th>
                <th style={{ width: "18%" }}>Full Name</th>
                <th style={{ width: "24%" }}>Email</th>
                <th style={{ width: "14%" }}>Avatar</th>
                <th style={{ width: "40%" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myCompany.Users.map(employee => (
                <>
                  <EmployeeUserCell user={employee} key={employee._id} />
                </>
              ))}
            </tbody>
          </Table>
        </Box>
      </Box>
    </>
  )
}

export default CompanyEmployees
