import { useContext, useState } from "react"
import CompanyPostsCell from "../components/CompanyPostsCell"
import JobsContext from "../utils/JobsContext"
import { Box } from "@mui/material"
import { ToastContainer } from "react-toastify"
import { CssBaseline } from "@mui/material"
import Sidebar from "../components/Sidebar"
import { Button, Table } from "react-bootstrap"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddPostCompanyModel from "../components/AddPostCompanyModel"

function CompanyPosts() {
  const { posts, profile } = useContext(JobsContext)
  const [show , setShow] = useState(false)
  if (!profile) return null
  const allPost = posts.filter(post => post.ownerCompany)
  const companyPost = allPost.filter(post => post.ownerCompany._id == profile.Work._id)

  return (
    <>
      {" "}
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <h1 style={{ marginTop: 10 }}>Company Post</h1>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{ marginRight: 40, marginBottom: 10 }}
              onClick={() => setShow(true)}
              variant="outline-primary"
            >
                <span style={{ marginRight: 7 }}>Add Post</span> <AddCircleOutlineIcon />
              
            </Button>
          </div>
          <hr />
          <Table bordered hover style={{ tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th style={{ width: "9%" }}>Id</th>
                <th style={{ width: "40%" }}>Description</th>
                <th style={{ width: "24%" }}>Poster</th>
              </tr>
            </thead>

            <tbody>
              {companyPost.map(post => (
                <>
                  <CompanyPostsCell post={post} key={post._id} />
                </>
              ))}
            </tbody>
          </Table>
          <AddPostCompanyModel show={show} setShow={setShow} />
          <hr />
        </Box>
      </Box>
    </>
  )
}

export default CompanyPosts
