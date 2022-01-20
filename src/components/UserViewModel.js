import { ListGroup, Modal, Button, Card, Col, Row, Table } from "react-bootstrap"

function UserViewModel(props) {
  const { user, show, setShow } = props
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>First Name:</strong> {user.firstName}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Last Name:</strong> {user.lastName}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Email :</strong> {user.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Avatar:</strong>{" "}
              <img src={user.avatar} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <ListGroup.Item>
          <>
            <hr />
          </>
        </ListGroup.Item>
        <ListGroup.Item>
          <h2>Education:</h2>
          {user.Education.map(userEducation => (
            <>
              <strong>degree :</strong> {userEducation.degree} <br />
              <strong>university :</strong> {userEducation.university} <br />
              <strong>field :</strong> {userEducation.field}
              <hr />
            </>
          ))}
        </ListGroup.Item>
        <ListGroup.Item>
          <h2>Skills:</h2>
          {user.skills.map(skill => (
            <>
              <ul>
                <li>{skill.skill}</li>
              </ul>
            </>
          ))}
        </ListGroup.Item>
        <ListGroup.Item>
          <h2>Certificates:</h2>
          {user.Certificates.map(Certificate => (
            <>
              <ul>
                <li>{Certificate.title}</li>
              </ul>
            </>
          ))}
        </ListGroup.Item>
        <ListGroup.Item>
          <h2>Experience:</h2>
          {user.Experience.map(oneExperience => (
            <>
              <strong>Company :</strong> {oneExperience.company} <br />
              <strong>JobTitle :</strong> {oneExperience.jobtitle} <br />
              <hr />
            </>
          ))}
        </ListGroup.Item>
        <ListGroup.Item>
          <h2>Interesting Field :</h2>
          {user.interesting.map(interest => (
            <>
              <ul>
                <li>{interest.name}</li>
              </ul>
            </>
          ))}
        </ListGroup.Item>

        <ListGroup.Item>
          <h2>Following: ({user.followwnig.length})</h2>
        </ListGroup.Item>
        <Row style={{ marginTop: "10px" }}>
          {user.followwnig.map(follow => (
            <>
              <Col style={{ marginLeft: "10px" }} md={2}>
                <img
                  style={{ objectFit: "cover", height: "50px", width: "50px" }}
                  class="rounded-circle"
                  src={follow.avatar}
                  data-holder-rendered="true"
                />
                <span>
                  {follow.firstName} {follow.lastName}
                </span>
              </Col>
            </>
          ))}
        </Row>
        <ListGroup.Item>
          <h2>Followers: ({user.followers.length})</h2>
        </ListGroup.Item>
        <Row style={{ marginTop: "10px" }}>
          {user.followers.map(follow => (
            <>
              <Col style={{ marginLeft: "10px" }} md={2}>
                <img class="rounded-circle" width={50} height={50} src={follow.avatar} data-holder-rendered="true" />
                <span>
                  {follow.firstName} {follow.lastName}
                </span>
              </Col>
            </>
          ))}
        </Row>
        <Modal.Footer />
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UserViewModel
