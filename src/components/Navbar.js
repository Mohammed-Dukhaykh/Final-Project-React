import { useContext } from "react"
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import JobsContext from "../utils/JobsContext"

function NavbarItem() {
  const { logout, company, profile, formSearch, users } = useContext(JobsContext)
  if (!profile) return <h1>...loading</h1>
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img
            src="https://scontent.fmed1-1.fna.fbcdn.net/v/t39.30808-6/269675384_2145909032228655_4239034493093183794_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=5AY_xFtNEmEAX9k_rqH&_nc_ht=scontent.fmed1-1.fna&oh=00_AT_dgJ8XjhFBAE1ZYzbYzRroWLWLwLgEmTVX5sW0H4Z_Ag&oe=61F1D6B9"
            alt=""
            style={{ height: "30px", width: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>

            {profile.isCEO || profile.isHR ? (
              <Link to="/companyActions" className="nav-link">
                Company Actions
              </Link>
            ) : null}

            {profile.isHR == false && profile.isCEO == false ? (
              <Link to="/add-company" className="nav-link">
                Add Company
              </Link>
            ) : null}

            <Form style={{ marginRight: "40px", display: "flex"  }} onSubmit={formSearch}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                name="userSearch"
                list="userSearch"
              />
              <datalist id="userSearch">
                {users.map(user => (
                  <option value={`${user.firstName} ${user.lastName}`} />
                ))}
              </datalist>
              <Button type="submit" variant="outline-dark">
                Search
              </Button>
            </Form>
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
