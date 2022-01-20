import { useContext } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import JobsContext from "../utils/JobsContext"

function NavbarItem() {
  const { logout, company, profile } = useContext(JobsContext)
  if (!profile) return <h1>...loading</h1>
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Employment Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link" >Home</Link>
            <Nav.Link href="#pricing">Jobs</Nav.Link>
            <Link to="/add-post" className="nav-link">
              Add Post
            </Link>
           
            {profile.isCEO || profile.isHR ? (
              <Link to="/companyActions" className="nav-link">Company Actions</Link>
            ) : null}
           
          </Nav>

          {!localStorage.tokenEmployment ? (
            <Nav>
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link onClick={logout} href="#deets">
                Logout
              </Nav.Link>
              <Link className="nav-link" to="/profile">
                profile
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
