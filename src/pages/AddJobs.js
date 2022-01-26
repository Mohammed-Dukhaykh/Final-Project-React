import AddCommentIcon from "@mui/icons-material/AddComment"
import { Button, Container, FloatingLabel, Form } from "react-bootstrap"
import { Box } from "@mui/material"
import { ToastContainer } from "react-toastify"
import { CssBaseline } from "@mui/material"
import Sidebar from "../components/Sidebar"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import { useState } from "react"
import { useContext } from "react"
import JobsContext from "../utils/JobsContext"
import AddQuestionModel from "../components/AddQuestionModel"
function AddJobs() {
  const [show, setShow] = useState(false)
  const { addJob, interests } = useContext(JobsContext)
  return (
    <>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Container>
            <h1 style={{ marginTop: 10 }}>Add Job</h1>
            <Form style={{ margin: "30px" }} onSubmit={addJob}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Job Title" name="title" />
              </Form.Group>
              <Form.Label>Job Description</Form.Label>
              <FloatingLabel controlId="floatingTextarea" className="mb-3">
                <Form.Control as="textarea" name="description" />
              </FloatingLabel>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Job Poster</Form.Label>
                <Form.Control type="file" placeholder="Enter Job Poster" accept="image/png , image/jepg" name="poster" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Job Field</Form.Label>
                {interests.map(interest => (
                  <Form.Check type="radio" label={interest.name} value={interest._id} name="interest" />
                ))}
              </Form.Group>
              <Button variant="primary" type="submit" onClick={() => setShow(true)}>
                Submit
              </Button>
            </Form>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default AddJobs
