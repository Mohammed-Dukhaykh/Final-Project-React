import { useContext } from "react"
import JobsContext from "../utils/JobsContext"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import PersonRemoveIcon from "@mui/icons-material/PersonRemove"
import NavbarItem from "../components/Navbar"
import { Button, Card, Col, Row } from "react-bootstrap"

function Followers() {
  const { profile, follow } = useContext(JobsContext)
  if (!profile) return null
  return (
    <>
      <NavbarItem />

      <Row>
        {profile.followers.map(followObject => (
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "35rem",
            }}
          >
            <Col style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ objectFit: "contain", margin: "20px", marginRight: "100px", justifyContent: "space-around" }}
                width={100}
                height={100}
                src={followObject.avatar}
                data-holder-rendered="true"
                class="rounded-circle"
              />
              <h4>
                <strong>
                  {followObject.firstName} {followObject.lastName}
                </strong>
              </h4>
              <Button style={{ marginLeft: "20px" }} onClick={() => follow(followObject._id)} variant="light">
                {profile.followwnig.find(user => user._id == followObject._id) ? (
                  <PersonAddAltIcon sx={{ fontSize: 23 }} />
                ) : (
                  <PersonRemoveIcon sx={{ fontSize: 23 }} />
                )}
              </Button>
            </Col>
          </Card>
        ))}
      </Row>
    </>
  )
}

export default Followers