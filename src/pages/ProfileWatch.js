import { useContext } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import NavbarItem from "../components/Navbar"
import JobsContext from "../utils/JobsContext"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import PersonRemoveIcon from "@mui/icons-material/PersonRemove"
function ProfileWatch() {
    const {profile , follow} = useContext(JobsContext)
    if (!profile) return null
  return (
    <>
      <NavbarItem />

      <Row>
        {profile.profileWatch.map(followObject => (
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
                src={followObject.visitor.avatar}
                data-holder-rendered="true"
                class="rounded-circle"
              />
              <h4>
                <strong>
                  {followObject.visitor.firstName} {followObject.visitor.lastName}
                </strong>
              </h4>
              <Button style={{ marginLeft: "20px" }} onClick={() => follow(followObject.visitor._id)} variant="light">
                {profile.followwnig.find(user => user._id == followObject.visitor._id) ? (
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

export default ProfileWatch
