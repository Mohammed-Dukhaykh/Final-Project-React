import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import MovieCreationIcon from "@mui/icons-material/MovieCreation"
import AddReactionIcon from "@mui/icons-material/AddReaction"
import RecentActorsIcon from "@mui/icons-material/RecentActors"
import GroupIcon from "@mui/icons-material/Group"
import TheatersIcon from "@mui/icons-material/Theaters"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import HomeIcon from "@mui/icons-material/Home"
import WorkSharpIcon from "@mui/icons-material/WorkSharp"
import ApartmentIcon from "@mui/icons-material/Apartment"
import AssignmentIcon from "@mui/icons-material/Assignment"
import SchoolIcon from "@mui/icons-material/School"
import { useContext } from "react"
import JobsContext from "../utils/JobsContext"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import AddTaskIcon from '@mui/icons-material/AddTask';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PostAddIcon from '@mui/icons-material/PostAdd';
// function Sidebar() {
//   return (
//     <>
{
  /* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className="nav-link" to="/companyActions">Company Actions</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/add-employees">Add Employees</Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Link className="nav-link" to="/">Back Home</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */
}

//     </>
//   )
// }
const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { profile } = useContext(JobsContext)
  if (!profile) return null
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "rgb(0, 0, 0)" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <WorkSharpIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="My Jobs dashboard" sx={{ color: "white" }} />
          </ListItem>
        </List>

        <img
          style={{ width: "100px", objectFit: "contain" }}
          class="rounded-circle"
          src={profile.Work.avatar}
          data-holder-rendered="true"
        />
        <h5 style={{ color: "white", marginTop: "10px" }}>{profile.Work.companyName} </h5>

        <List>
          <Link to="/companyActions" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/add-employees" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <GroupIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Add Employees" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/company-employees" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <ApartmentIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Company Employees" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/company-posts" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <PostAddIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Company Posts" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/company-jobs" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Company Jobs" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/add-job" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <AddTaskIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Add Jobs" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem button>
            <ListItemIcon>
              <ArrowBackIosIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Back To Home" sx={{ color: "white", textDecoration: "none" }} />
          </ListItem>
        </Link>
      </Drawer>
    </ThemeProvider>
  )
}

// export default Sidebar
