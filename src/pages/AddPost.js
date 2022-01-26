import { useContext } from "react"
import { Button, Container, Form } from "react-bootstrap"
import NavbarItem from "../components/Navbar"
import JobsContext from "../utils/JobsContext"

function AddPost() {
    const {profileAddPost} = useContext(JobsContext)
  return (
    <>
      <NavbarItem />
    
    </>
  )
}

export default AddPost
