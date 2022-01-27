import { useContext } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import UsersCell from "../components/UsersCell";
import JobsContext from "../utils/JobsContext";
import { Box } from "@mui/material"
import { ToastContainer } from "react-toastify"
import { CssBaseline } from "@mui/material"

function AddEmployees() {
    const {users} = useContext(JobsContext)
    const newUsers = users.filter(user => user.role != "Admin" && user.Work == null)
    return ( 
        <> 
       <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
    <h1 style={{ marginTop: 10 }}>Add Employees</h1>
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
            {newUsers.map(user => (
              <>
                <UsersCell user={user} key={user._id}/>
              </>
            ))}
          </tbody>
        </Table>
        </Box>
        </Box>
        </> );
}

export default AddEmployees;